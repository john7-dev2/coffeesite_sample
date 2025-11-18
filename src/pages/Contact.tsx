import { MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-4">
            Visit Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Come visit us in Candolim
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-playfair mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    123 Beach Road, Candolim<br />
                    Goa 403515, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-playfair mb-2">Hours</h3>
                  <p className="text-muted-foreground">Open Daily</p>
                  <p className="text-primary font-semibold">8 AM - 8 PM</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <h3 className="text-xl font-bold font-playfair mb-4">Get in Touch</h3>
                
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 12345 67890</span>
                </a>

                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@samplecafe</span>
                </a>
              </div>
            </div>

            <div className="bg-secondary/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-playfair mb-4 text-primary">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" size="lg" asChild>
                  <a href="tel:+911234567890">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-warm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7384892929!2d73.75996431487493!3d15.516927089301054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0b7cc52b3d7%3A0x3c12f3a6e6d5d4e8!2sCandolim%2C%20Goa!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sample Cafe Location Map"
            ></iframe>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            See You Soon
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Drop by for coffee, food, or just to hang out. We're open daily from 8 AM to 8 PM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
