import { FileText, Newspaper, Megaphone, Download, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

type Document = {
  title: string;
  date: string;
  description: string;
  link: string;
};

const newsletters: Document[] = [
  { title: "Spring 2025 Newsletter", date: "March 2025", description: "Updates on the shop's progress and upcoming events.", link: "#" },
  { title: "Winter 2024 Newsletter", date: "December 2024", description: "Year-end review and holiday opening hours.", link: "#" },
  { title: "Autumn 2024 Newsletter", date: "September 2024", description: "Harvest celebrations and community news.", link: "#" },
];

const pressReleases: Document[] = [
  { title: "Community Shop Grand Opening", date: "June 2024", description: "Official press release for the shop's grand opening.", link: "#" },
  { title: "Partnership Announcement", date: "March 2024", description: "New partnership with local suppliers.", link: "#" },
];

const newspaperArticles: Document[] = [
  { title: "Uppingham's New Community Hub", date: "July 2024", description: "Featured in the Rutland Times.", link: "#" },
  { title: "How Volunteers Power the Shop", date: "May 2024", description: "Article in the Stamford Mercury.", link: "#" },
];

const DocumentSection = ({
  title,
  icon: Icon,
  docs,
}: {
  title: string;
  icon: React.ElementType;
  docs: Document[];
}) => (
  <section className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="text-primary" size={20} />
      </div>
      <h2 className="text-2xl font-display font-bold">{title}</h2>
    </div>
    <div className="grid gap-4">
      {docs.map((doc) => (
        <a
          key={doc.title}
          href={doc.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-card border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition-all group"
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{doc.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
            <span className="text-xs text-muted-foreground mt-1 block">{doc.date}</span>
          </div>
          <div className="ml-4 flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
            <Download size={18} />
            <ExternalLink size={16} />
          </div>
        </a>
      ))}
    </div>
  </section>
);

const Documents = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Documents</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Browse and download our newsletters, press releases, and newspaper articles. 
          These documents are publicly available for the community.
        </p>

        <DocumentSection title="Newsletters" icon={FileText} docs={newsletters} />
        <DocumentSection title="Press Releases" icon={Megaphone} docs={pressReleases} />
        <DocumentSection title="Newspaper Articles" icon={Newspaper} docs={newspaperArticles} />

        <div className="bg-muted rounded-xl p-6 text-center">
          <p className="text-muted-foreground text-sm">
            Documents will be linked to Google Drive for easy download. Check back regularly for new updates.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Documents;
