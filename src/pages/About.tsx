import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Quality is at the heart of everything we do. We never settle for mediocrity.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication with our clients.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Honesty and transparency guide our relationships and business practices.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Strategy Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "15", label: "Team Members" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              About Us
            </p>
            <h1 className="heading-xl mb-8">
              Building the future
              <br />
              of <span className="text-primary">digital</span>.
            </h1>
            <p className="text-body max-w-2xl">
              We are a passionate team of designers, developers, and strategists
              dedicated to creating exceptional digital experiences that drive
              real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                Our Story
              </p>
              <h2 className="heading-lg mb-8">
                From a small idea
                <br />
                to a <span className="text-primary">global impact</span>.
              </h2>
              <div className="space-y-6 text-body">
                <p>
                  Founded in 2014, Daveat started with a simple mission: to help
                  businesses succeed in the digital world. What began as a
                  two-person operation has grown into a full-service creative
                  agency.
                </p>
                <p>
                  Over the years, we've had the privilege of working with
                  startups, enterprises, and everything in between. Each project
                  has taught us something new and fueled our passion for
                  innovation.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new
                  technologies and methodologies to deliver solutions that not
                  only meet but exceed our clients' expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                  alt="Our team collaborating"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Our Values</p>
            <h2 className="heading-lg">
              Principles that
              <br />
              guide our work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border border-border bg-card hover:border-primary transition-colors duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-primary font-medium mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                Our Team
              </p>
              <h2 className="heading-lg">
                Meet the people
                <br />
                behind <span className="text-primary">Daveat</span>.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Want to join our team?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for creating exceptional digital experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
