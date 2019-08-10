// import * as genresAPI from "./fakeGenreService";

const users = [
  {
    _id: "5193bc2c7a46",
    lastName: "Waldorf",
    firstName: "Blair",
    image: "/img/stores/bestbuy.jpg",
    status: "Approved",
    paymentMethod: "Credit Card",
    postmark: "04/29/2019",
    remarks: ""
  },
  {
    _id: "5193bc2c7a46",
    lastName: "Van der Woodsen",
    firstName: "Serena",
    image: "/img/stores/bestbuy.jpg",
    status: "Rejected",
    paymentMethod: "Credit Card",
    postmark: "04/29/2019",
    remarks: "Invalid ID"
  },
  {
    _id: "adffd0948258",
    lastName: "Humphrey",
    firstName: "Dan",
    image: "/img/stores/bestbuy.jpg",
    status: "Pending Requirements",
    paymentMethod: "Promo Code",
    postmark: "04/29/2019",
    remarks: "Missing ID"
  },
  {
    _id: "3d9a5fc551df",
    lastName: "Bass",
    firstName: "Chuck",
    image: "/img/stores/bestbuy.jpg",
    status: "Rejected",
    paymentMethod: "Invoice",
    postmark: "04/29/2019",
    remarks: "Invalid invoice"
  },
  {
    _id: "3d9a5fc551df",
    lastName: "Humphrey",
    firstName: "Jenny",
    image: "/img/stores/bestbuy.jpg",
    status: "For Review",
    paymentMethod: "Credit Card",
    postmark: "04/29/2019",
    remarks: ""
  },
  {
    _id: "8f920f04",
    lastName: "Archibald",
    firstName: "Nate",
    image: "/img/stores/bestbuy.jpg",
    status: "Approved",
    paymentMethod: "Invoice",
    postmark: "04/29/2019",
    remarks: ""
  }
];

export function getUsers() {
  return users;
}

export function getUser(id) {
  return users.find(v => v._id === id);
}
