import Layout from "@/components/Layout";

const milestones = [
  { year: "2023/4", title: "The town facing closure of the Post Office", description: "Robin, the PostMaster, and his team have been providing the town with an excellent service for well over a decade.  Robin decided to retire a few years ago and sought a buyer for the Post Office business but with no success.  Alternative high street businesses were approached.  The Town Council were asked if they would take on the rescue.  No solutions were found.  It seemed likely that the Post Office would have to close." },
  { year: "2024", title: "Creating the Community Benefit Society", description: "A small number of volunteers got together to publicise the issue and seek additional volunteers.  A series of interest meetings were held together with Robin to find a solution.  Robin had done some research and found the Plunkett Foundation had a model structure based on forming a Community Benefit Society.   Volunteers from the interest meetings came together to form the CBS and elect a Management Committee, laying the groundwork for the organisational structure and community engagement strategy." },
  { year: "March 2025", title: "The plan to raise the money to \"Save the Post Office\"", description: "The Management Committee worked with Robin to develop a business plan, including the need to raise funding of £63,000 and the profitability needed to repay supporters over the first three years of trading.  They then put plans in place to communicate the intention to \"Save the Post Office\" through leaflets, presentations and press." },
  { year: "March 2026", title: "Funding Achieved", description: "The community responded positively to the need for support, reaching 150 members subscribing £25,000; the Town Council agreeing to fund £18,000 and a small number of individuals prepared to make interest free loans for 3 years of up to £25,000. So the funding required was achieved by March 2026, but the target of 200-250 members still needed more time." },
  { year: "2025", title: "The Future", description: "Only time will tell, but the aim is to retain a Post Office that has a broad ownership within the community, where people feel it is 'their' post office and where the staff feel an integrated part of that community." },
];


const HistoryPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Our History</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          The story of how our community came together to save a critical community service in the heart of Uppingham.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) =>
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-start gap-6 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`
              }>
              
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
            )}
          </div>
        </div>
      </div>
    </Layout>);

};

export default HistoryPage;