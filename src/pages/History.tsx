import Layout from "@/components/Layout";

const milestones = [
  { year: "2023", title: "The Idea is Born", description: "A group of passionate Uppingham residents identified the need for a community-run shop in the marketplace, sparking the vision for what would become the Uppingham Marketplace Community Shop." },
  { year: "2023", title: "Forming the Committee", description: "Volunteers came together to form a steering committee, laying the groundwork for the shop's organisational structure and community engagement strategy." },
  { year: "2024", title: "Community Fundraising", description: "Through local events, donations, and community support, funds were raised to secure the premises and stock the shop." },
  { year: "2024", title: "Grand Opening", description: "The Uppingham Marketplace Community Shop officially opened its doors, welcoming the community to a shop run by the people, for the people." },
  { year: "2025", title: "Growing Together", description: "With a growing team of volunteers and loyal customers, the shop continues to expand its offerings and strengthen community bonds." },
];

const HistoryPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Our History</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          The story of how our community came together to create something special in the heart of Uppingham.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-1 z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">{m.title}</h3>
                  <p className="text-muted-foreground">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HistoryPage;
