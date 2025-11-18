import { Coffee, Droplet, Cake, UtensilsCrossed, Sparkles } from "lucide-react";
import matchaLatte from "@/assets/matcha-latte.jpg";
import pastries from "@/assets/pastries.jpg";
import waffle from "@/assets/waffle.jpg";
import espresso from "@/assets/espresso.jpg";

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

const Menu = () => {
  const drinks: MenuItem[] = [
    {
      name: "Espresso",
      description: "Single or double shot of espresso",
      image: espresso,
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      image: espresso,
    },
    {
      name: "Flat White",
      description: "Double espresso with microfoam milk",
      image: espresso,
    },
    {
      name: "Matcha Latte",
      description: "Japanese matcha with steamed milk",
      image: matchaLatte,
    },
  ];

  const desserts: MenuItem[] = [
    {
      name: "Croissants",
      description: "Butter croissants, baked fresh",
      image: pastries,
    },
    {
      name: "Chocolate Cake",
      description: "Chocolate cake with ganache",
      image: pastries,
    },
    {
      name: "Fruit Tart",
      description: "Pastry with vanilla cream and fruit",
      image: pastries,
    },
    {
      name: "Cinnamon Roll",
      description: "Cinnamon rolls with cream cheese frosting",
      image: pastries,
    },
  ];

  const food: MenuItem[] = [
    {
      name: "Belgian Waffles",
      description: "Waffles with berries and syrup",
      image: waffle,
    },
    {
      name: "Avocado Toast",
      description: "Avocado on sourdough, poached eggs",
      image: waffle,
    },
    {
      name: "Club Sandwich",
      description: "Chicken, bacon, lettuce, tomato",
      image: waffle,
    },
    {
      name: "Grilled Panini",
      description: "Chicken or veg with cheese",
      image: waffle,
    },
  ];

  const specials: MenuItem[] = [
    {
      name: "Iced Matcha Latte",
      description: "Cold matcha with oat milk",
      image: matchaLatte,
    },
    {
      name: "Affogato",
      description: "Vanilla gelato with espresso",
      image: espresso,
    },
  ];

  const MenuSection = ({
    title,
    items,
    icon: Icon,
  }: {
    title: string;
    items: MenuItem[];
    icon: any;
  }) => (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="h-8 w-8 text-primary" />
        <h2 className="text-4xl font-bold font-playfair text-primary">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-smooth"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-40 h-40 overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold font-playfair mb-2 text-foreground">
                  {item.name}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground">
            What we're serving
          </p>
        </div>

        {/* Menu Sections */}
        <MenuSection title="Drinks" items={drinks} icon={Coffee} />
        <MenuSection title="Desserts" items={desserts} icon={Cake} />
        <MenuSection title="Food" items={food} icon={UtensilsCrossed} />
        <MenuSection title="Specials" items={specials} icon={Sparkles} />
      </div>
    </div>
  );
};

export default Menu;
