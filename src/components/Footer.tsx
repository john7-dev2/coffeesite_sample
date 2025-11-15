import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">BOOHA</h3>
            <p className="text-sm opacity-90">
              Savor the Art of Speciality Coffee & Matcha
            </p>
          </div>

          {/* Hours & Location */}
          <div>
            <h4 className="font-semibold mb-3">Visit Us</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Candolim, Goa
              </p>
              <p>Open Daily: 10 AM - 7 PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/booha.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-smooth"
              >
                <Instagram className="h-5 w-5" />
                @booha.in
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-smooth"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} BOOHA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
