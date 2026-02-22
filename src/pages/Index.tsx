import { Link } from "react-router-dom";
import { FileText, History, HelpCircle, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import logo from "@/assets/logo.jpeg";

const features = [
  {
    icon: FileText,
    title: "Documents",
    description: "Access newsletters, press releases, and newspaper articles.",
    link: "/documents",
  },
  {
    icon: History,
    title: "Our History",
    description: "Discover the story and milestones of our community shop.",
    link: "/history",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to frequently asked questions.",
    link: "/faq",
  },
  {
    icon: Mail,
    title: "Contact Us",
    description: "Get in touch with us — we'd love to hear from you.",
    link: "/contact",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 py-20 md:py-28 text-center">
          <img
            src={logo}
            alt="Uppingham Marketplace Community Shop"
            className="mx-auto h-32 md:h-40 w-auto mb-6 rounded-xl shadow-lg bg-card p-3"
          />
          <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Uppingham Marketplace<br />Community Shop
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            A community-run shop at the heart of Uppingham, bringing people together since our founding.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/documents"
              className="inline-flex items-center gap-2 bg-card text-primary font-semibold px-6 py-3 rounded-lg hover:bg-muted transition-colors shadow"
            >
              <FileText size={18} />
              Browse Documents
            </Link>
            <Link
              to="/history"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <History size={18} />
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
          Explore Our Community
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.link}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all animate-fade-in"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
