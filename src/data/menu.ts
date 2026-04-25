export type MenuItem = {
  name: string;
  price: string; // formatted GBP
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

// Prices reinterpreted in GBP for the UK menu.
export const MENU: MenuSection[] = [
  {
    id: "soups",
    title: "Soups",
    subtitle: "Slow simmered, served bowled",
    items: [
      { name: "Hot & Sour Soup", price: "£4.50" },
      { name: "Veg Manchow Soup", price: "£4.50" },
      { name: "Chicken Hot & Sour", price: "£5.20" },
      { name: "Chicken Manchow with Fried Noodles", price: "£5.80" },
    ],
  },
  {
    id: "veg-starters",
    title: "Vegetarian Starters",
    subtitle: "From the wok, to the table",
    items: [
      { name: "Paneer Chilli", price: "£6.90" },
      { name: "Veg Manchurian", price: "£5.90" },
      { name: "Paneer 65", price: "£6.90" },
      { name: "Baby Corn Chilli", price: "£6.50" },
      { name: "Palak Crisp Balls", price: "£6.50" },
      { name: "Gobhi Chilli", price: "£5.20" },
      { name: "Golden Fritters", price: "£7.20", note: "6 pcs" },
    ],
  },
  {
    id: "non-veg-starters",
    title: "Non-Vegetarian Starters",
    subtitle: "Smoke, char, spice",
    items: [
      { name: "Chicken Chilli", price: "£6.90 / £10.90" },
      { name: "Chicken Manchurian", price: "£6.90 / £10.90" },
      { name: "Chicken 65", price: "£6.90 / £10.90" },
      { name: "Roasted Chicken", price: "£8.90 / £13.90", note: "4 / 8 pcs" },
      { name: "Chicken Pakoda", price: "£9.90 / £18.90", note: "8 / 16 pcs" },
      { name: "Chicken Lollipop", price: "£8.90", note: "6 pcs" },
      { name: "Pepper Chicken", price: "£8.50" },
      { name: "Lemon Pepper Chicken", price: "£8.90 / £13.90", note: "4 / 8 pcs" },
    ],
  },
  {
    id: "noodles",
    title: "Noodles & Rice",
    subtitle: "Indo-Chinese house specials",
    items: [
      { name: "Chicken Chowmein", price: "£5.50" },
      { name: "Chicken Hakka Noodles", price: "£5.90" },
      { name: "Veg Chowmein", price: "£4.50" },
      { name: "Veg Hakka Noodles", price: "£4.90" },
      { name: "Veg Lollipop", price: "£5.50", note: "6 pcs" },
    ],
  },
  {
    id: "wraps",
    title: "Wraps & Rolls",
    subtitle: "Tandoor warmth, hand rolled",
    items: [
      { name: "Tandoori Chicken Wrap", price: "£6.90" },
      { name: "Paneer Tikka Roll", price: "£5.90" },
      { name: "Spring Rolls", price: "£4.50" },
      { name: "Chana Puri", price: "£5.20" },
    ],
  },
  {
    id: "chai",
    title: "Chai & Coffee",
    subtitle: "The reason regulars return",
    items: [
      { name: "Masala Chai", price: "£2.20" },
      { name: "Kulhad Chai", price: "£2.80" },
      { name: "Italian Style Hot Chocolate", price: "£3.50" },
      { name: "Karak Coffee", price: "£3.20" },
      { name: "Pistachio Cream Latte", price: "£3.80" },
    ],
  },
];
