//We'll have to import our data here to run through our DataTable index.js file
// import products from "../products.json";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newProduct = () => {
  const statusChance = Math.random()
  return {
    name: "High Plains Drifter",
    category: "Blue Dream x Chem Dawg x Fire OG",
    description: "A potent, psychedelic portal to a dimension just beyond our own.",
    image: "Placeholder",
    stock: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }

  // {
  //   name: "High Plains Drifter",
  //   category: "Blue Dream x Chem Dawg x Fire OG",
  //   description: "A potent, psychedelic portal to a dimension just beyond our own.",
  //   image: "Soon",
  //   stock: Math.floor(Math.random() * 100),
  //   status:
  //     statusChance > 0.66
  //       ? 'relationship'
  //       : statusChance > 0.33
  //       ? 'complicated'
  //       : 'single',
  // }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newProduct(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
