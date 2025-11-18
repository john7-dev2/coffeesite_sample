import { Coffee, Heart, Users } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import heroCoffee from "@/assets/hero-coffee.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-4">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Coffee bar in Candolim, Goa
          </p>
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={cafeInterior}
              alt="Sample Cafe Interior"
              className="rounded-2xl shadow-warm w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-playfair text-primary">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Started because we wanted a place in Candolim that served
              good coffee. Simple as that.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use single-origin beans, make our pastries fresh each morning,
              and keep things straightforward. No fuss, just quality.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-playfair text-center text-primary mb-12">
            What We Believe In
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We don't cut corners. Good beans, proper brewing, fresh ingredients.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Fresh Daily</h3>
              <p className="text-muted-foreground">
                Everything's made fresh. Pastries baked in the morning, food
                prepared to order.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Local Spot</h3>
              <p className="text-muted-foreground">
                A neighborhood place where people come to work, meet friends,
                or just grab a coffee.
              </p>
            </div>
          </div>
        </div>

        {/* Atmosphere */}
        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold font-playfair text-primary">
                The Space
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're located in Candolim, close to the beach. The space is
                comfortable—good for working, meeting people, or just sitting
                with a coffee.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lots of natural light, wood furniture, and a relaxed vibe.
                Come early for breakfast, stay for lunch, or drop by in the
                afternoon.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={heroCoffee}
                alt="Coffee craftsmanship"
                className="rounded-2xl shadow-warm w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
