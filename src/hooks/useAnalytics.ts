import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "daveat_session_id";

function getSessionId(): string {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export type EventType = 
  | "cta_click" 
  | "scroll_depth" 
  | "time_on_page" 
  | "page_view";

export interface EventData {
  [key: string]: string | number | boolean | undefined;
}

export function useAnalytics() {
  const trackEvent = useCallback(async (
    eventType: EventType,
    eventData: EventData = {}
  ) => {
    try {
      const { error } = await supabase.from("analytics_events").insert({
        session_id: getSessionId(),
        event_type: eventType,
        event_data: eventData,
        page_url: window.location.pathname,
        user_agent: navigator.userAgent,
      });

      if (error) {
        console.error("Analytics tracking error:", error);
      }
    } catch (err) {
      console.error("Analytics tracking failed:", err);
    }
  }, []);

  const trackCTAClick = useCallback((ctaName: string, ctaLocation: string) => {
    return trackEvent("cta_click", { cta_name: ctaName, cta_location: ctaLocation });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((sectionId: string, depth: number) => {
    return trackEvent("scroll_depth", { section_id: sectionId, depth_percent: depth });
  }, [trackEvent]);

  const trackTimeOnPage = useCallback((seconds: number) => {
    return trackEvent("time_on_page", { seconds });
  }, [trackEvent]);

  const trackPageView = useCallback(() => {
    return trackEvent("page_view", { referrer: document.referrer });
  }, [trackEvent]);

  return {
    trackEvent,
    trackCTAClick,
    trackScrollDepth,
    trackTimeOnPage,
    trackPageView,
  };
}
