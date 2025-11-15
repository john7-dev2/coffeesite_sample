import heroCoffee from "@/assets/hero-coffee.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";
import pastries from "@/assets/pastries.jpg";
import waffle from "@/assets/waffle.jpg";
import espresso from "@/assets/espresso.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Gallery = () => {
  const images = [
    { src: heroCoffee, alt: "Specialty coffee pour" },
    { src: matchaLatte, alt: "Matcha latte with latte art" },
    { src: pastries, alt: "Artisanal pastries display" },
    { src: waffle, alt: "Belgian waffle with berries" },
    { src: espresso, alt: "Fresh espresso shot" },
    { src: cafeInterior, alt: "BOOHA café interior" },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-4">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            A glimpse into the BOOHA experience
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-warm transition-smooth aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                <p className="text-primary-foreground font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-secondary/50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the warmth and flavor of BOOHA in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/booha.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 font-medium transition-smooth hover:opacity-90"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
