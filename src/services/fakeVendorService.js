// import * as genresAPI from "./fakeGenreService";

const vendors = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Best Buy",
    category: "Appliances",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Dallas Cowboys Pro Shop",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 15,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Kohl's Medallion Center",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "H&M",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Costco",
    category: "Lessons",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 15,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Gap",
    category: "Apparel",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Forever 21",
    category: "Beauty & Health",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    name: "Apple Store",
    category: "Electronics",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    name: "Dell",
    category: "Electronics",
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "/img/stores/bestbuy.jpg"
  }
];

export function getVendors() {
  return vendors;
}

export function getVendor(id) {
  return vendors.find(v => v._id === id);
}
