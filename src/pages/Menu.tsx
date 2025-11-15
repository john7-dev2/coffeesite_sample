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
      description: "Single or double shot of rich, aromatic specialty espresso",
      image: espresso,
    },
    {
      name: "Cappuccino",
      description: "Perfect balance of espresso, steamed milk and velvety foam",
      image: espresso,
    },
    {
      name: "Flat White",
      description: "Smooth microfoam paired with double espresso shot",
      image: espresso,
    },
    {
      name: "Matcha Latte",
      description: "Premium Japanese matcha whisked with steamed milk",
      image: matchaLatte,
    },
  ];

  const desserts: MenuItem[] = [
    {
      name: "Croissants",
      description: "Buttery, flaky French pastry baked fresh daily",
      image: pastries,
    },
    {
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with ganache frosting",
      image: pastries,
    },
    {
      name: "Fruit Tart",
      description: "Crispy pastry shell with vanilla cream and fresh fruits",
      image: pastries,
    },
    {
      name: "Cinnamon Roll",
      description: "Soft, gooey rolls with cream cheese frosting",
      image: pastries,
    },
  ];

  const food: MenuItem[] = [
    {
      name: "Belgian Waffles",
      description: "Crispy waffles with fresh berries and maple syrup",
      image: waffle,
    },
    {
      name: "Avocado Toast",
      description: "Smashed avocado on sourdough with poached eggs",
      image: waffle,
    },
    {
      name: "Club Sandwich",
      description: "Triple-decker with chicken, bacon, lettuce and tomato",
      image: waffle,
    },
    {
      name: "Grilled Panini",
      description: "Choice of chicken or vegetarian with melted cheese",
      image: waffle,
    },
  ];

  const specials: MenuItem[] = [
    {
      name: "Iced Matcha Latte",
      description: "Refreshing cold matcha with oat milk and honey",
      image: matchaLatte,
    },
    {
      name: "Affogato",
      description: "Vanilla gelato drowned in hot espresso",
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
            Crafted with love, served with care
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
