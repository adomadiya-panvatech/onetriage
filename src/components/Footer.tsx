import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONFIG } from "@/config/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              One<span className="text-secondary">Triage</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              24/7 Healthcare Access
            </p>
            <div className="flex items-start space-x-2">
              <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <a
                  href="tel:1-800-916-2459"
                  className="text-primary-foreground hover:text-secondary transition-colors font-semibold"
                >
                  1-800-916-2459
                </a>
                <p className="text-primary-foreground/70 text-xs mt-1">
                  Available 24/7 for emergencies
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Accessibility & Information Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>14269 Danielson St, Suite 400</p>
                  <p>Poway, CA 92064</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                   
                    className="text-primary-foreground/80  text-sm block"
                  >
                    {CONFIG.EMAILS.SUPPORT} 
                  </a>
                  <a
                    className="text-primary-foreground/80  text-sm block"
                  >
                    {CONFIG.EMAILS.SALES}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2025 OneTriage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

