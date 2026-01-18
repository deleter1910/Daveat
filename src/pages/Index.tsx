import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Sparkles, Target, Zap, Users } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Brand Strategy", description: "Build a memorable brand identity that resonates with your audience." },
  { icon: Target, title: "Digital Marketing", description: "Data-driven campaigns that deliver measurable results." },
  { icon: Zap, title: "Web Development", description: "Modern, responsive websites built for performance." },
  { icon: Users, title: "Consulting", description: "Expert guidance to scale your business effectively." },
];

export default function Index() {
  return (
    <Layout>
      <section className="section-padding min-h-[90vh] flex items-center">
        <div className="container mx-auto">
          <div className="max-w-5xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Welcome to Daveat
            </p>
            <h1 className="heading-xl mb-8">
              We craft digital<br />experiences that<br /><span className="text-primary">inspire</span>.
            </h1>
            <p className="text-body max-w-2xl mb-12">
              A creative agency dedicated to transforming your vision into powerful digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">Our Services <ArrowRight className="ml-2" size={18} /></Link>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <h2 className="heading-lg mb-16">Services that<br />drive growth.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 rounded-3xl border border-border bg-background hover:border-primary transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">Ready to start your project?</h2>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-background text-foreground font-medium hover:bg-foreground hover:text-background transition-all">
            Get in Touch <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
