export const categories = [
  { _id: 1, name: "Antiques" },
  { _id: 2, name: "Apparel" },
  { _id: 3, name: "Appliances" },
  { _id: 4, name: "Arts & Crafts" },
  { _id: 5, name: "Automotive/Vehicles" },
  { _id: 6, name: "Beauty & Health" },
  { _id: 7, name: "Books" },
  { _id: 8, name: "Electronics" },
  { _id: 9, name: "Farming/Gardening" },
  { _id: 10, name: "Financial " },
  { _id: 11, name: "Furniture" },
  { _id: 12, name: "Lessons" },
  { _id: 13, name: "Professional Services" },
  { _id: 14, name: "Skilled Services" },
  { _id: 15, name: "Therapeutic" },
  { _id: 16, name: "Travel/Vacation" }
];

export function getCategories() {
  return categories.filter(g => g);
}
