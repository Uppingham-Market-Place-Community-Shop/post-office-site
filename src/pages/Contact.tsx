import { useState } from "react";
import { Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thank you for getting in touch. We'll respond as soon as we can." });
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          We'd love to hear from you. Whether you have a question, suggestion, or want to volunteer — drop us a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-input bg-card rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-input bg-card rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                id="message"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-input bg-card rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              <Send size={16} />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="bg-muted rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-primary" size={24} />
              <h3 className="font-display text-xl font-bold">Other Ways to Reach Us</h3>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Visit Us</strong><br />
                Uppingham Marketplace, Uppingham, Rutland
              </p>
              <p>
                <strong className="text-foreground">Email</strong><br />
                info@uppinghamcommunityshop.co.uk
              </p>
              <p>
                <strong className="text-foreground">Volunteer</strong><br />
                Interested in volunteering? Mention it in your message and we'll be in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
