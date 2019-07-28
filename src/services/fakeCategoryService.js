const cardTitles = [
  "Account Details",
  "Vendor Information",
  "Store Profile",
  "Payment",
  "Acknowledgement"
];

const categories = [
  { _id: 1, value: "Antiques" },
  { _id: 2, value: "Apparel" },
  { _id: 3, value: "Appliances" },
  { _id: 4, value: "Arts & Crafts" },
  { _id: 5, value: "Automotive/Vehicles" },
  { _id: 6, value: "Beauty & Health" },
  { _id: 7, value: "Books" },
  { _id: 8, value: "Electronics" },
  { _id: 9, value: "Farming/Gardening" },
  { _id: 10, value: "Financial " },
  { _id: 11, value: "Furniture" },
  { _id: 12, value: "Lessons" },
  { _id: 13, value: "Professional Services" },
  { _id: 14, value: "Skilled Services" },
  { _id: 15, value: "Therapeutic" },
  { _id: 16, value: "Travel/Vacation" }
];

const creditCards = [
  { _id: 1, value: "American Express" },
  { _id: 2, value: "MasterCard" },
  { _id: 3, value: "Visa" }
];

const discounts = [
  { _id: 1, value: "5%" },
  { _id: 2, value: "10%" },
  { _id: 3, value: "15%" },
  { _id: 4, value: "20%" }
];

const paymentMethods = [
  { _id: 1, value: "Credit Card" },
  { _id: 2, value: "Invoice" },
  { _id: 3, value: "Promo Code" }
];

export function getCardTitles() {
  return cardTitles;
}

export function getCategories() {
  return categories;
}

export function getCreditCards() {
  return creditCards;
}

export function getDiscounts() {
  return discounts;
}

export function getPaymentMethods() {
  return paymentMethods;
}
