const appStatus = [
  { _id: 1, value: "Approved" },
  { _id: 2, value: "For Review" },
  { _id: 3, value: "Pending Requirements" },
  { _id: 4, value: "Rejected" }
];

const cardTitles = [
  "Account Details",
  "Vendor Information",
  "Store Profile",
  "Payment",
  "Acknowledgement"
];

const categories = [
  { _id: 1, label: "Antiques", value: "Antiques" },
  { _id: 2, label: "Apparel", value: "Apparel" },
  { _id: 3, label: "Appliances", value: "Appliances" },
  { _id: 4, label: "Arts & Crafts", value: "Arts & Crafts" },
  { _id: 5, label: "Automotive/Vehicles", value: "Automotive/Vehicles" },
  { _id: 6, label: "Beauty & Health", value: "Beauty & Health" },
  { _id: 7, label: "Books", value: "Books" },
  { _id: 8, label: "Electronics", value: "Electronics" },
  { _id: 9, label: "Farming/Gardening", value: "Farming/Gardening" },
  { _id: 10, label: "Financial", value: "Financial " },
  { _id: 11, label: "Furniture", value: "Furniture" },
  { _id: 12, label: "Lessons", value: "Lessons" },
  { _id: 13, label: "Professional Services", value: "Professional Services" },
  { _id: 14, label: "Skilled Services", value: "Skilled Services" },
  { _id: 15, label: "Therapeutic", value: "Therapeutic" },
  { _id: 16, label: "Travel/Vacation", value: "Travel/Vacation" }
];

const creditCards = [
  { _id: 1, label: "American Express", value: "American Express" },
  { _id: 2, label: "MasterCard", value: "MasterCard" },
  { _id: 3, label: "Visa", value: "Visa" }
];

const discounts = [
  { _id: 1, label: "5%", value: 5 },
  { _id: 2, label: "10%", value: 10 },
  { _id: 3, label: "15%", value: 15 },
  { _id: 4, label: "20%", value: 20 }
];

const paymentMethods = [
  { _id: 1, label: "Credit Card", value: "Credit Card" },
  { _id: 2, label: "Invoice", value: "Invoice" },
  { _id: 3, label: "Promo Code", value: "Promo Code" }
];

const subscriptions = [
  { _id: 1, label: "Free", value: 0 },
  { _id: 2, label: "$5/month", value: 5 },
  { _id: 3, label: "$8/month", value: 8 }
];

export function getAppStatus() {
  return appStatus;
}

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

export function getSubscriptions() {
  return subscriptions;
}
