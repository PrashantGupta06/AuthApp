const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRouter");
const ProductRouter = require("./routes/ProductRouter");
require("dotenv").config();
require("./database");

const PORT = process.env.PORT || 4000;

app.get("/test", (req, res) => {
  res.send("This server is working fine!");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server has started at PORT ${PORT}`);
});
