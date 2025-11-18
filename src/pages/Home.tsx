import { Link } from "react-router-dom";
import { Coffee, Cake, UtensilsCrossed, Clock, MapPin, Award, Heart, Sparkles, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";
import pastries from "@/assets/pastries.jpg";
import waffle from "@/assets/waffle.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Enhanced with modern gradient overlay */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-beige via-background to-secondary/50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${heroCoffee})`,
          }}
        >
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Premium Badge */}

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-playfair text-primary mb-6 leading-[1.05] tracking-tight animate-[fadeIn_1.2s_ease-out]">
            Specialty Coffee<br />
            <span className="relative inline-block">
              & Matcha Bar
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto font-medium leading-relaxed animate-[fadeIn_1.4s_ease-out]">
            Coffee bar & eatery in Candolim, Goa
          </p>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-[fadeIn_1.6s_ease-out]">
            <div className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-smooth hover:scale-105 hover:border-primary/40">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm text-foreground">Open Daily: 8 AM - 8 PM</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-smooth hover:scale-105 hover:border-primary/40">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm text-foreground">123 Beach Road, Candolim</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-[fadeIn_1.8s_ease-out]">
            <Link to="/menu">
              <Button size="lg" className="text-base font-semibold px-12 py-7 rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-smooth hover:scale-105 group bg-primary hover:bg-primary/90">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base font-semibold px-12 py-7 rounded-full border-2 border-primary shadow-xl hover:shadow-2xl transition-smooth hover:scale-105 bg-white hover:bg-primary hover:text-primary-foreground">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>  
      </section>
      
      {/* Offerings Section - Enhanced Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-playfair mb-6 text-primary">
              What We Serve
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              From single-origin espresso to fresh-baked pastries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Drinks Card */}
            <Link to="/menu" className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-warm hover:shadow-2xl transition-smooth">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={matchaLatte}
                    alt="Specialty drinks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-end p-8 group-hover:from-primary transition-smooth">
                  <div className="transform group-hover:-translate-y-2 transition-smooth">
                    <div className="p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm w-fit mb-4">
                      <Coffee className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold font-playfair text-primary-foreground mb-2">
                      Drinks
                    </h3>
                    <p className="text-primary-foreground/90 mb-4">
                      Coffee, matcha & teas
                    </p>
                    <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                      <span>View Menu</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-smooth" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Food Card */}
            <Link to="/menu" className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-warm hover:shadow-2xl transition-smooth">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={waffle}
                    alt="Food menu"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-end p-8 group-hover:from-primary transition-smooth">
                  <div className="transform group-hover:-translate-y-2 transition-smooth">
                    <div className="p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm w-fit mb-4">
                      <UtensilsCrossed className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold font-playfair text-primary-foreground mb-2">
                      Food
                    </h3>
                    <p className="text-primary-foreground/90 mb-4">
                      Brunch, waffles & sandwiches
                    </p>
                    <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                      <span>View Menu</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-smooth" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desserts Card */}
            <Link to="/menu" className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-warm hover:shadow-2xl transition-smooth">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={pastries}
                    alt="Desserts"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-end p-8 group-hover:from-primary transition-smooth">
                  <div className="transform group-hover:-translate-y-2 transition-smooth">
                    <div className="p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm w-fit mb-4">
                      <Cake className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold font-playfair text-primary-foreground mb-2">
                      Desserts
                    </h3>
                    <p className="text-primary-foreground/90 mb-4">
                      Fresh pastries & desserts
                    </p>
                    <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                      <span>View Menu</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-smooth" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section - New */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-primary leading-tight">
                Why Visit Us
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A neighborhood spot for good coffee and food. Whether you're here for a quick espresso or settling in for a few hours, we've got you covered.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/40 border border-border/60 hover:border-primary/30 transition-smooth">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Coffee className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Quality Coffee</h4>
                    <p className="text-sm text-muted-foreground">Pour-over, AeroPress, and espresso drinks made with single-origin beans.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/40 border border-border/60 hover:border-primary/30 transition-smooth">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Comfortable Space</h4>
                    <p className="text-sm text-muted-foreground">Window seats, tables, and sofas. Good for working or just hanging out.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/40 border border-border/60 hover:border-primary/30 transition-smooth">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Work-Friendly</h4>
                    <p className="text-sm text-muted-foreground">Fast Wi-Fi and power outlets. Quiet during weekday afternoons.</p>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <Button size="lg" variant="outline" className="rounded-full border-2 group">
                  Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroCoffee}
                  alt="BOOHA cafe interior"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">4.9</p>
                    <p className="text-xs text-muted-foreground">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-warm-beige/40 via-secondary/40 to-warm-beige/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-primary">
              About Us
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Opened in Candolim to serve quality coffee and good food. Everything's made fresh, and we source our beans carefully.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-3xl bg-white border-2 border-primary/15 shadow-xl hover:shadow-2xl transition-smooth hover:scale-105 hover:border-primary/30">
              <div className="text-6xl font-bold text-primary mb-3">20+</div>
              <p className="text-foreground/80 font-semibold text-base">Coffee & matcha drinks</p>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-white border-2 border-primary/15 shadow-xl hover:shadow-2xl transition-smooth hover:scale-105 hover:border-primary/30">
              <div className="text-6xl font-bold text-primary mb-3">10+</div>
              <p className="text-foreground/80 font-semibold text-base">Desserts baked daily</p>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-white border-2 border-primary/15 shadow-xl hover:shadow-2xl transition-smooth hover:scale-105 hover:border-primary/30">
              <div className="text-6xl font-bold text-primary mb-3">7</div>
              <p className="text-foreground/80 font-semibold text-base">Days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Card */}
            <div className="rounded-3xl bg-white border-2 border-primary/15 shadow-2xl p-8 md:p-12 flex flex-col justify-between hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.2)] transition-smooth">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">Find Us</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6 leading-tight">
                  Plan Your Visit
                </h2>
                
                <p className="text-foreground/70 text-lg mb-10 leading-relaxed">
                  We're in Candolim, a few minutes from the beach.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-secondary/30 backdrop-blur-sm p-6 border-2 border-primary/10 hover:border-primary/30 transition-smooth hover:bg-secondary/40">
                  <p className="font-bold text-primary mb-2 text-base">Location</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">123 Beach Road<br />Candolim, Goa 403515</p>
                </div>
                
                <div className="rounded-2xl bg-secondary/30 backdrop-blur-sm p-6 border-2 border-primary/10 hover:border-primary/30 transition-smooth hover:bg-secondary/40">
                  <p className="font-bold text-primary mb-2 text-base">Timings</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">Open daily<br />8:00 AM – 8:00 PM</p>
                </div>
                
                <div className="rounded-2xl bg-secondary/30 backdrop-blur-sm p-6 border-2 border-primary/10 hover:border-primary/30 transition-smooth hover:bg-secondary/40">
                  <p className="font-bold text-primary mb-2 text-base">Perfect For</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">Coffee dates, remote work & catch-ups</p>
                </div>
                
                <div className="rounded-2xl bg-secondary/30 backdrop-blur-sm p-6 border-2 border-primary/10 hover:border-primary/30 transition-smooth hover:bg-secondary/40">
                  <p className="font-bold text-primary mb-2 text-base">Peak Hours</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">Evenings & weekends<br />Drop by early for quiet corners</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-3xl bg-gradient-to-br from-primary/95 to-primary border-2 border-primary shadow-2xl p-8 md:p-12 flex flex-col justify-between hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.3)] transition-smooth">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/80 mb-4">
                  Candolim, Goa
                </p>
                
                <h3 className="text-2xl md:text-3xl font-bold font-playfair text-primary-foreground mb-6 leading-tight">
                  Stop by before or after the beach
                </h3>
                
                <p className="text-primary-foreground/90 mb-8 leading-relaxed text-base">
                  Good coffee, fresh food, and a place to relax.
                </p>

                {/* Special Offer Badge */}
              </div>

              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-10 py-6 shadow-xl hover:shadow-2xl group bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                  Get Directions & Contact
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
