// import * as genresAPI from "./fakeGenreService";

const vendors = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Best Buy",
    category: "Appliances",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "/img/stores/bestbuy.jpg",
    status: "Rejected",
    paymentMethod: "Credit Card",
    postmark: "04/29/2019",
    remarks: "Scam"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Dallas Cowboys Pro Shop",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 15,
    image: "/img/stores/bestbuy.jpg",
    status: "Pending Requirements",
    paymentMethod: "Promo Code",
    postmark: "04/29/2019",
    remarks: "Missing ID"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Kohl's Medallion Center",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg",
    status: "For Review",
    paymentMethod: "Credit Card",
    postmark: "04/29/2019",
    remarks: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "H&M",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "/img/stores/bestbuy.jpg",
    status: "Rejected",
    paymentMethod: "Invoice",
    postmark: "04/29/2019",
    remarks: "Invalid invoice"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Costco",
    category: "Lessons",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 15,
    image: "/img/stores/bestbuy.jpg",
    status: "Approved",
    paymentMethod: "Credit Card",
    postmark: "04/29/2019",
    remarks: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Gap",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg",
    status: "Approved",
    paymentMethod: "Invoice",
    postmark: "04/29/2019",
    remarks: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Forever 21",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "/img/stores/bestbuy.jpg",
    status: "Pending Requirements",
    paymentMethod: "Invoice",
    postmark: "04/29/2019",
    remarks: "Missing ID"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    name: "Apple Store",
    category: "Electronics",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg",
    status: "For Review",
    paymentMethod: "Promo Code",
    postmark: "04/29/2019",
    remarks: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    name: "Dell",
    category: "Electronics",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg",
    status: "Pending Requirements",
    paymentMethod: "Invoice",
    postmark: "04/29/2019",
    remarks: "Missing ID"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471012",
    name: "Zara",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg",
    status: "Pending Requirements",
    paymentMethod: "Invoice",
    postmark: "04/10/2019",
    remarks: "Missing ID"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471888",
    name: "Mango",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg",
    status: "For Review",
    paymentMethod: "Invoice",
    postmark: "04/10/2019",
    remarks: ""
  }
];

export function getVendors() {
  return vendors;
}

export function getVendor(id) {
  return vendors.find(v => v._id === id);
}
