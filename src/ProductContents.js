const products = [
  {
    id: 1,
    title: "Asus ProArt GForce RTX 4070",
    category: "Graphics card",
    price: 999.99,
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/61o7BiIL0kL._AC_UY218_.jpg",
  },
  {
    id: 2,
    title: "Asus ProArt GForce RTX 4070",
    category: "Graphics card",
    price: 1004.99,
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/71ew6CmP1CL._AC_UY218_.jpg",
  },
  {
    id: 3,
    title: "Asus ProArt GForce RTX 4070",
    price: 236.99,
    category: "Graphics card",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/71JMCzWs-fL._AC_UY218_.jpg",
  },

  {
    id: 4,
    title: "Asus ProArt GForce RTX 4070",
    price: 929.99,
    category: "Graphics card",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/71ksU0grdbL._AC_UY218_.jpg",
  },
  {
    id: 5,
    title: "Asus ProArt GForce RTX 4070",
    price: 459.99,
    category: "Graphics card",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/81ba+dsNlUL._AC_UY218_.jpg",
  },
  {
    id: 6,
    title: "Asus ProArt GForce RTX 4070",
    price: 299.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/41S2OSRfBuL._AC_UY218_.jpg",
  },
  {
    id: 7,
    title: "Asus ProArt GForce RTX 4070",
    price: 349.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/61-oTP1X4rL._AC_UY218_.jpg",
  },
  {
    id: 8,
    title: "Asus ProArt GForce RTX 4070",
    price: 569.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/61hw7aZWYSL._AC_UY218_.jpg",
  },
  {
    id: 9,
    title: "Asus ProArt GForce RTX 4070",
    price: 654.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/71vFKBpKakL._AC_UY218_.jpg",
  },
  {
    id: 10,
    title: "Asus ProArt GForce RTX 4070",
    price: 922.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/619L9jf3-rL._AC_UY218_.jpg",
  },
  {
    id: 11,
    title: "Asus ProArt GForce RTX 4070",
    price: 123.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/71P6+TVf3GL._AC_UY218_.jpg",
  },
  {
    id: 12,
    title: "Asus ProArt GForce RTX 4070",
    price: 290.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/71r-IejTWiL._AC_UY218_.jpg",
  },
  {
    id: 13,
    title: "Asus ProArt GForce RTX 4070",
    price: 859.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/71S62iXEjPL._AC_UY218_.jpg",
  },
  {
    id: 14,
    title: "Asus ProArt GForce RTX 4070",
    price: 549.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/81feM0d09eL._AC_UY218_.jpg",
  },
  {
    id: 15,
    title: "Asus ProArt GForce RTX 4070",
    price: 219.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/511AheCcg6L._AC_UY218_.jpg",
  },
  {
    id: 16,
    title: "Asus ProArt GForce RTX 4070",
    price: 999.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/710HmaQgX3L._AC_UY218_.jpg",
  },
  {
    id: 17,
    title: "Asus ProArt GForce RTX 4070",
    price: 889.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/61TeTD0LaqL._AC_UY218_.jpg",
  },
  {
    id: 18,
    title: "Asus ProArt GForce RTX 4070",
    price: 797.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/61tOgJ849GL._AC_UY218_.jpg",
  },
  {
    id: 19,
    title: "Asus ProArt GForce RTX 4070",
    price: 453.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/71b3DFHWd7L._AC_UY218_.jpg",
  },
  {
    id: 20,
    title: "Asus ProArt GForce RTX 4070",
    price: 126.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/71953BcF5iL._AC_UY218_.jpg",
  },
  {
    id: 21,
    title: "Asus ProArt GForce RTX 4070",
    price: 892.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/71kPNtypaoL._AC_UY218_.jpg",
  },
];
export default products;
