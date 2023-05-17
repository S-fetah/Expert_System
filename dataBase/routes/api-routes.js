const express = require("express");
const gsmArena = require("gsmarena-api");
const router = express.Router();

router.get("/samsung", (req, res) => {
  let data = [];
  gsmArena.catalog
    .getBrand("samsung-phones-9")
    .then((result) => {
      result.forEach((brand) => data.push(brand));
      return data;
    })
    .then((data) => {
      // console.log(data);
      res.render("apiRes", { data: data });
    })
    .catch((err) => console.log(err));
});
router.get("/xiaomi", (req, res) => {
  let data = [];
  gsmArena.catalog
    .getBrand("xiaomi-phones-80")
    .then((result) => {
      result.forEach((brand) => data.push(brand));
      return data;
    })
    .then((data) => {
      // console.log(data);
      res.render("apiRes", { data: data });
    })
    .catch((err) => console.log(err));
});
router.get("/iphone", (req, res) => {
  let data = [];
  gsmArena.catalog
    .getBrand("apple-phones-48")
    .then((result) => {
      result.forEach((brand) => data.push(brand));
      return data;
    })
    .then((data) => {
      // console.log(data);
      res.render("apiRes", { data: data });
    })
    .catch((err) => console.log(err));
});
router.get("/oppo", (req, res) => {
  let data = [];
  gsmArena.catalog
    .getBrand("oppo-phones-82")
    .then((result) => {
      result.forEach((brand) => data.push(brand));
      return data;
    })
    .then((data) => {
      // console.log(data);
      res.render("apiRes", { data: data });
    })
    .catch((err) => console.log(err));
});
router.get("/huawei", (req, res) => {
  let data = [];
  gsmArena.catalog
    .getBrand("huawei-phones-58")
    .then((result) => {
      result.forEach((brand) => data.push(brand));
      return data;
    })
    .then((data) => {
      // console.log(data);
      res.render("apiRes", { data: data });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
