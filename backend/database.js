const mongoose = require("mongoose");

require("dotenv").config();
const DB_URL = process.env.DATABASE_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log("MongoDb connection Error: ", err);
  });
