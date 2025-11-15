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
            About BOOHA
          </h1>
          <p className="text-xl text-muted-foreground">
            Where passion for coffee meets Goa's laid-back charm
          </p>
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={cafeInterior}
              alt="BOOHA Café Interior"
              className="rounded-2xl shadow-warm w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-playfair text-primary">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born from a love for specialty coffee and the vibrant culture of
              Goa, BOOHA is more than just a café—it's a celebration of
              craftsmanship and community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We source the finest single-origin beans and premium matcha to
              create drinks that awaken your senses. Every pastry is baked fresh,
              every dish prepared with care, ensuring that each visit to BOOHA is
              a memorable experience.
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
                We never compromise on quality. From bean to cup, excellence is
                our standard.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Made with Love</h3>
              <p className="text-muted-foreground">
                Every item on our menu is crafted with passion and attention to
                detail.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Community</h3>
              <p className="text-muted-foreground">
                We're building a space where coffee lovers and food enthusiasts
                come together.
              </p>
            </div>
          </div>
        </div>

        {/* Atmosphere */}
        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold font-playfair text-primary">
                The Candolim Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nestled in the heart of Candolim, BOOHA captures the essence of
                Goa's unique blend of relaxation and sophistication. Our space is
                designed to be your haven—whether you're starting your day with a
                perfect espresso, enjoying a leisurely brunch, or winding down
                with friends over dessert.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Natural light streams through our windows, complementing the warm
                wood tones and minimalist décor. It's a place where time slows
                down, conversations flow, and every moment is savored.
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
