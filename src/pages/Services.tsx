import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Users,
  PenTool,
  BarChart3,
  Globe,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description:
      "We help you define and articulate your brand's unique value proposition, positioning, and visual identity.",
    features: [
      "Brand positioning & messaging",
      "Visual identity design",
      "Brand guidelines",
      "Competitive analysis",
    ],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Create intuitive, beautiful interfaces that delight users and drive engagement across all platforms.",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Interface design",
      "Design systems",
    ],
  },
  {
    icon: Zap,
    title: "Web Development",
    description:
      "Build fast, responsive, and scalable web applications using modern technologies and best practices.",
    features: [
      "Custom web applications",
      "E-commerce solutions",
      "CMS development",
      "API integrations",
    ],
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into customers.",
    features: [
      "SEO & content marketing",
      "Paid advertising",
      "Social media marketing",
      "Email campaigns",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Turn data into actionable insights with comprehensive analytics and reporting solutions.",
    features: [
      "Custom dashboards",
      "Performance tracking",
      "A/B testing",
      "Conversion optimization",
    ],
  },
  {
    icon: Users,
    title: "Consulting",
    description:
      "Strategic guidance and expert advice to help you navigate the digital landscape and achieve your goals.",
    features: [
      "Digital transformation",
      "Technology consulting",
      "Process optimization",
      "Growth strategy",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, and challenges to understand what success looks like.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a comprehensive plan tailored to your specific needs and objectives.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Our team brings the strategy to life with meticulous attention to detail and quality.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "We continuously monitor, test, and refine to ensure optimal performance and results.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Our Services
            </p>
            <h1 className="heading-xl mb-8">
              Solutions that
              <br />
              <span className="text-primary">elevate</span> your brand.
            </h1>
            <p className="text-body max-w-2xl">
              From strategy to execution, we offer comprehensive services
              designed to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border border-border bg-card hover:border-primary transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Our Process</p>
            <h2 className="heading-lg">
              How we bring
              <br />
              ideas to <span className="text-primary">life</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <p className="text-6xl font-bold text-primary/20 mb-4">
                  {item.step}
                </p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/20 to-transparent -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="rounded-3xl border border-border bg-card p-12 md:p-16 text-center">
            <Globe className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="heading-md mb-6">
              Ready to transform your digital presence?
            </h2>
            <p className="text-body max-w-2xl mx-auto mb-10">
              Every project is unique. Let's discuss your specific needs and
              create a custom solution that fits your budget and goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Let's build something amazing.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch
            and let's start creating together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Start a Project
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
