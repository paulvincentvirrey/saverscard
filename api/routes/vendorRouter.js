const express = require("express");
const vendorsController = require("../controllers/vendorsController");

function routes(Vendor) {
  const vendorRouter = express.Router();
  const controller = vendorsController(Vendor);
  vendorRouter
    .route("/vendors")
    .post(controller.post)
    .get(controller.get);

  vendorRouter.use("/vendors/:vendorId", (req, res, next) => {
    Vendor.findById(req.params.vendorId, (err, vendor) => {
      if (err) {
        return res.send(err);
      }
      if (vendor) {
        req.vendor = vendor;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  vendorRouter
    .route("/vendors/:vendorId")
    .get((req, res) => res.json(req.vendor))
    .put((req, res) => {
      const { vendor } = req;
      vendor.name = req.body.name;
      vendor.category = req.body.category;
      vendor.address = req.body.address;
      vendor.discountRate = req.body.discountRate;
      vendor.image = req.body.image;
      req.vendor.save(err => {
        if (err) {
          return res.send(err);
        }
        return res.json(vendor);
      });
    })
    .patch((req, res) => {
      const { vendor } = req;

      if (req.body._id) {
        delete req.body._id;
      }

      Object.entries(req.body).forEach(item => {
        const key = item[0];
        const value = item[1];
        vendor[key] = value;
      });
      req.vendor.save(err => {
        if (err) {
          return res.send(err);
        }
        return res.json(vendor);
      });
    })
    .delete((req, res) => {
      req.vendor.remove(err => {
        if (err) {
          return res.send(err);
        }

        return res.sendStatus(204);
      });
    });

  return vendorRouter;
}

module.exports = routes;
