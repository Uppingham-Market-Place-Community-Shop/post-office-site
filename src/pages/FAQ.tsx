import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is the Uppingham Marketplace Community Shop?", a: "We are a community-run shop located in the heart of Uppingham's marketplace. Our shop is operated by volunteers and exists to serve the local community with everyday essentials and locally sourced products." },
  { q: "How can I volunteer?", a: "We're always looking for enthusiastic volunteers! Please visit our Contact page to get in touch, and we'll let you know about current opportunities and how you can get involved." },
  { q: "What are your opening hours?", a: "Our opening hours vary seasonally. Please check our latest newsletter or contact us directly for current opening times." },
  { q: "How is the shop funded?", a: "The shop is funded through a combination of community fundraising, donations, and revenue from sales. We are a not-for-profit organisation and all proceeds go back into running and improving the shop." },
  { q: "Can I donate products to the shop?", a: "Yes! We welcome donations of suitable products. Please contact us to discuss what items we can accept and arrange a drop-off." },
  { q: "Where can I find your newsletters and press releases?", a: "All our documents including newsletters, press releases, and newspaper articles are available on our Documents page for free download." },
  { q: "How can I stay updated on shop news?", a: "Follow our newsletters available on the Documents page, and feel free to visit us in-store for the latest community updates." },
];

const FAQ = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Find answers to common questions about the Uppingham Marketplace Community Shop.
        </p>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
