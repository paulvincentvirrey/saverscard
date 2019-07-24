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

const creditCards = [
  { _id: 1, value: "American Express" },
  { _id: 2, value: "MasterCard" },
  { _id: 3, value: "Visa" }
];

const paymentMethods = [
  { _id: 1, value: "Credit Card" },
  { _id: 2, value: "Invoice" },
  { _id: 3, value: "Promo Code" }
];

const cardTitles = [
  "Account Details",
  "Vendor Information",
  "Store Profile",
  "Payment",
  "Acknowledgement"
];

export function getCategories() {
  return creditCards;
}

export function getPaymentMethods() {
  return paymentMethods;
}

export function getCardTitles() {
  return cardTitles;
}

export function getCreditCards() {
  return creditCards;
}
