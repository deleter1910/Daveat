import { useEffect, useRef, createContext, useContext, ReactNode } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface AnalyticsContextValue {
  trackCTAClick: (ctaName: string, ctaLocation: string) => Promise<void>;
}

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalyticsContext must be used within AnalyticsProvider");
  }
  return context;
}

interface AnalyticsProviderProps {
  children: ReactNode;
}

const SCROLL_SECTIONS = [
  "section-hero",
  "section-problem",
  "section-solution",
  "section-benefits",
  "section-pricing",
  "section-faq",
  "section-final-cta",
];

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const { trackCTAClick, trackScrollDepth, trackTimeOnPage, trackPageView } = useAnalytics();
  const trackedSections = useRef<Set<string>>(new Set());
  const startTime = useRef<number>(Date.now());

  // Track page view on mount
  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  // Track scroll depth with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId && !trackedSections.current.has(sectionId)) {
              trackedSections.current.add(sectionId);
              const sectionIndex = SCROLL_SECTIONS.indexOf(sectionId);
              const depthPercent = sectionIndex >= 0 
                ? Math.round(((sectionIndex + 1) / SCROLL_SECTIONS.length) * 100)
                : 0;
              trackScrollDepth(sectionId, depthPercent);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      SCROLL_SECTIONS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [trackScrollDepth]);

  // Track time on page when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      // Use fetch with keepalive for reliable tracking on page unload
      const data = {
        session_id: sessionStorage.getItem("daveat_session_id") || "",
        event_type: "time_on_page",
        event_data: { seconds: timeSpent },
        page_url: window.location.pathname,
        user_agent: navigator.userAgent,
      };
      
      // Use fetch with keepalive instead of sendBeacon to include required headers
      fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/analytics_events`, {
        method: 'POST',
        headers: {
          'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(data),
        keepalive: true // Ensures request completes even if page unloads
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackCTAClick }}>
      {children}
    </AnalyticsContext.Provider>
  );
}
