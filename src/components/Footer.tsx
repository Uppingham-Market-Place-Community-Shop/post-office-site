import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-auto">
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold mb-3">Uppingham Marketplace</h3>
          <p className="text-sm opacity-80">
            Community Shop Limited — serving the Uppingham community with pride.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/documents" className="hover:opacity-100 transition-opacity">Documents</Link></li>
            <li><Link to="/history" className="hover:opacity-100 transition-opacity">Our History</Link></li>
            <li><Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Get in Touch</h4>
          <p className="text-sm opacity-80">
            Have questions? Visit our{" "}
            <Link to="/contact" className="underline hover:opacity-100 transition-opacity">
              contact page
            </Link>{" "}
            to reach out.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Uppingham Marketplace Community Shop Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
