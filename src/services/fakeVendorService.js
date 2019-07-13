// import * as genresAPI from "./fakeGenreService";

const vendors = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Best Buy",
    category: { _id: "0", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Dallas Cowboys Pro Shop",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 15,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Kohl's Medallion Center",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "H&M",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Costco",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 15,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Gap",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Forever 21",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 20,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    name: "Apple Store",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "../img/stores/bestbuy.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    name: "Dell",
    category: { _id: "", name: "" },
    address: { latitude: 0, longhitude: 0 },
    discountRate: 10,
    image: "../img/stores/bestbuy.jpg"
  }
];

export function getVendors() {
  return vendors;
}

export function getVendor(id) {
  return vendors.find(v => v._id === id);
}

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
