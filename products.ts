export type Product = {
  id: number;
  name: string;
  category: {
    name: string;
    friendlyURL: string | null;
  };
  friendlyURL: string | null;
  description: string | null;
  price: number;
  discountedPrice: number | null;
  image: string;
};

const vinylProducts: Product[] = [
  {
    id: 1,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 2,
    name: 'Turn On The Bright Lights 7"',
    category: {
      name: "Interpol",
      friendlyURL: "interpol",
    },
    friendlyURL: "turn-on-the-bright-lights",
    description: "string",
    price: 119.99,
    discountedPrice: null,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/45/744861054504.jpg?w=640&h=640",
  },
  {
    id: 3,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 4,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 5,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 6,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 7,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 8,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 9,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
  {
    id: 10,
    name: 'Unknown Pleasures 7"',
    category: {
      name: "Joy Division",
      friendlyURL: "joy-division",
    },
    friendlyURL: "unknown-pleasures",
    description: "string",
    price: 119.99,
    discountedPrice: 89.99,
    image:
      "https://merchbar.imgix.net/product/vinylized/upc/39/825646183906.jpg?w=640&h=640",
  },
];

export default vinylProducts;
