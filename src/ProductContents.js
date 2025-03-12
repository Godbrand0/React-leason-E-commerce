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
    title: "GIGABYTE Radeon RX 9070",
    category: "Graphics card",
    price: 1004.99,
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/71ew6CmP1CL._AC_UY218_.jpg",
  },
  {
    id: 3,
    title: "ASUS Gaming Graphics Card",
    price: 236.99,
    category: "Graphics card",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/71JMCzWs-fL._AC_UY218_.jpg",
  },

  {
    id: 4,
    title: "ASUS Dual NVIDIA GeForce RTX 3050",
    price: 929.99,
    category: "Graphics card",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/71ksU0grdbL._AC_UY218_.jpg",
  },
  {
    id: 5,
    title: "RX 580 8G Graphic Cards",
    price: 459.99,
    category: "Graphics card",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/GPU/81ba+dsNlUL._AC_UY218_.jpg",
  },
  {
    id: 6,
    title: "Apple 2024 MacBook",
    price: 299.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/41S2OSRfBuL._AC_UY218_.jpg",
  },
  {
    id: 7,
    title: "2020 Apple MacBook Air",
    price: 349.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/61-oTP1X4rL._AC_UY218_.jpg",
  },
  {
    id: 8,
    title: "Apple 2024 MacBook",
    price: 569.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/61hw7aZWYSL._AC_UY218_.jpg",
  },
  {
    id: 9,
    title: "Apple 13in MacBook Pro",
    price: 654.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/71vFKBpKakL._AC_UY218_.jpg",
  },
  {
    id: 10,
    title: "Apple Macbook Air 2017 ",
    price: 922.99,
    category: "Laptop",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/Laptops/619L9jf3-rL._AC_UY218_.jpg",
  },
  {
    id: 11,
    title: "STGSivir All in One Desktop Computer",
    price: 123.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/71P6+TVf3GL._AC_UY218_.jpg",
  },
  {
    id: 12,
    title: "STGSivir All in One Desktop Computer",
    price: 290.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/71r-IejTWiL._AC_UY218_.jpg",
  },
  {
    id: 13,
    title: "2019 Apple iMac",
    price: 859.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/71S62iXEjPL._AC_UY218_.jpg",
  },
  {
    id: 14,
    title: "Apple iMac 27-inch",
    price: 549.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/81feM0d09eL._AC_UY218_.jpg",
  },
  {
    id: 15,
    title: "Apple iMac MK472LL/A",
    price: 219.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/511AheCcg6L._AC_UY218_.jpg",
  },
  {
    id: 16,
    title: "Dell S2425HS Monitor",
    price: 999.99,
    category: "Monitor",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/monitor/710HmaQgX3L._AC_UY218_.jpg",
  },
  {
    id: 17,
    title: "CORSAIR RM850x",
    price: 889.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/61TeTD0LaqL._AC_UY218_.jpg",
  },
  {
    id: 18,
    title: "CORSAIR RM750x",
    price: 797.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/61tOgJ849GL._AC_UY218_.jpg",
  },
  {
    id: 19,
    title: "NZXT C850 Gold ATX 3.1 ",
    price: 453.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/71b3DFHWd7L._AC_UY218_.jpg",
  },
  {
    id: 20,
    title: "MSI MAG A850GL PCIE 5.1 & ATX 3.1",
    price: 126.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/71953BcF5iL._AC_UY218_.jpg",
  },
  {
    id: 21,
    title: "AGV Series 500W",
    price: 892.99,
    category: "Power",
    description:
      "The SFE- ready ProArt RTX* 4070 SUPEROC Edition 12GB brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX* 40 SUPER Series performance.",
    image: "src/assets/images/power/71kPNtypaoL._AC_UY218_.jpg",
  },
];
export default products;
