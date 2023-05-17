const express = require("express");
const mongoose = require("mongoose");
const gsmArena = require("gsmarena-api");
const apiRoutes = require("./routes/api-routes");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/phoneStore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  price: {
    type: Number,
    required: true,
  },
  "camera Quality": {
    type: Number,
    required: true,
  },
  screen_size: {
    type: Number,
    required: true,
  },
  battery: {
    type: Number,
    required: true,
  },
});
const Phone = mongoose.model("phone", phoneSchema);
app.use("/", apiRoutes);
app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/home", (req, res) => {
  const page = fs.readFileSync("./views/home.html", "utf-8");
  res.send(page);
});
app.get("/Api-Result", (req, res) => {
  res.render("Api-Result");
});

app.post("/find", async (req, res) => {
  const data = req.body;
  console.log(data);

  const price = await Phone.find({
    price: { $lte: parseInt(data.price) },
  });

  const Suggested = price
    .filter((phone) => {
      if (phone["camera Quality"] >= parseInt(data.camera)) {
        return phone;
      }
    })
    .filter((phone) => {
      if (phone.screen_size >= parseFloat(data.screenSize)) {
        return phone;
      }
    })
    .filter((phone) => {
      if (phone.battery >= parseInt(data.battery)) {
        return phone;
      }
    })
    .filter((phone) => {
      if (phone.name.split(" ")[0] == data.name) {
        return phone;
      }
    });

  console.log(Suggested);

  // .then((result) => {
  //   if (result) {
  //     console.log(result);
  //   } else {
  //     console.log("no result");
  //   }
  // })
  // .catch((err) => console.log(err));
  res.render("result", { data: Suggested });
});
app.post("/create", async (req, res) => {
  const added = await Phone.create(req.body);
  console.log(added);
  res.redirect("/home");
});
app.get("/create", (req, res) => {
  const page = fs.readFileSync("./views/create.html", "utf-8");
  res.send(page);
});

// gsmArena.catalog
//   .getBrand("xiaomi-phones-80")
//   .then((res) => res.forEach((brand) => console.log(brand)));

app.listen(4000, () => {
  console.log("Server on 4000");
});
