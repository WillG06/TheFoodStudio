export type Review = {
  author: string;
  badge?: string;
  rating: number;
  date: string;
  quote: string;
  tags?: string[];
};

export const REVIEWS: Review[] = [
  {
    author: "Mahrukh Javeed",
    badge: "Local Guide · 25 reviews",
    rating: 5,
    date: "Three months ago",
    quote:
      "Had a really nice experience. The hospitality was great and the staff were very welcoming and friendly. The ambiance is calm and relaxing, with soft, slow music so you can actually sit and talk comfortably. It's a new business but they have something rare — a sense of care that you can taste in the food.",
    tags: ["friendly staff", "calm room"],
  },
  {
    author: "Manmehr Bansal",
    badge: "1 review",
    rating: 5,
    date: "Three months ago",
    quote:
      "I ordered a mixed grill and the food was fresh and tasty. I was welcomed with a warm smile from the lovely staff. Navjot helped me decide what to order — the portions were great and so was the price. I'll be back, and soon.",
    tags: ["mixed grill", "great value"],
  },
  {
    author: "ZeeLuxe Hair Care",
    badge: "4 reviews",
    rating: 5,
    date: "Three months ago",
    quote:
      "The restaurant is so beautiful and the food is so lovely. The owner even gives food to the homeless — what a blessed place it is.",
    tags: ["kind staff"],
  },
  {
    author: "A Regular",
    badge: "Anonymous",
    rating: 5,
    date: "Two months ago",
    quote:
      "The chai alone is worth the walk down Aston Street. Stayed for the tandoori wrap. Came back the next day for the same thing.",
    tags: ["tandoori chicken wrap", "chai"],
  },
  {
    author: "Aarav P.",
    badge: "Local diner",
    rating: 5,
    date: "Six weeks ago",
    quote:
      "Service was warm and welcoming, which made the experience even better. It feels like eating at someone's home — the kind of place Birmingham has been missing.",
    tags: ["service"],
  },
];
