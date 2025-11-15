import { Link } from "react-router-dom";
import { Coffee, Cake, UtensilsCrossed, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";
import pastries from "@/assets/pastries.jpg";
import waffle from "@/assets/waffle.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroCoffee})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair text-primary mb-6 leading-tight">
            Savor the Art of Speciality Coffee & Matcha
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A premium coffee bar, eatery & patisserie in Candolim, Goa
          </p>
          <div className="flex items-center justify-center gap-3 mb-8 text-lg">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium">Open Daily: 10 AM - 7 PM</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="text-lg px-8">
                View Menu
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-playfair text-center mb-16 text-primary">
            Explore Our Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Drinks */}
            <Link to="/menu" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-warm transition-smooth hover:scale-105">
                <img
                  src={matchaLatte}
                  alt="Specialty drinks"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
                  <Coffee className="h-10 w-10 text-primary-foreground mb-3" />
                  <h3 className="text-2xl font-bold font-playfair text-primary-foreground mb-2">
                    Drinks
                  </h3>
                  <p className="text-primary-foreground/90">
                    Speciality coffee, matcha & more
                  </p>
                </div>
              </div>
            </Link>

            {/* Desserts */}
            <Link to="/menu" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-warm transition-smooth hover:scale-105">
                <img
                  src={pastries}
                  alt="Desserts"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
                  <Cake className="h-10 w-10 text-primary-foreground mb-3" />
                  <h3 className="text-2xl font-bold font-playfair text-primary-foreground mb-2">
                    Desserts
                  </h3>
                  <p className="text-primary-foreground/90">
                    Artisanal pastries & cakes
                  </p>
                </div>
              </div>
            </Link>

            {/* Food */}
            <Link to="/menu" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-warm transition-smooth hover:scale-105">
                <img
                  src={waffle}
                  alt="Food"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
                  <UtensilsCrossed className="h-10 w-10 text-primary-foreground mb-3" />
                  <h3 className="text-2xl font-bold font-playfair text-primary-foreground mb-2">
                    Food
                  </h3>
                  <p className="text-primary-foreground/90">
                    Waffles, sandwiches & more
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-playfair mb-6 text-primary">
            Where Coffee Meets Art
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At BOOHA, we believe every cup tells a story. Nestled in the heart
            of Candolim, we bring together the finest specialty coffee beans,
            premium matcha, and artisanal baked goods to create an experience
            that delights all your senses.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Our Story
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
