// packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// app
const app = express();

// main configs
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// start
const start = () => {
  try {
    const PORT = process.env.PORT || 4100;
    const MONGO_URI = process.env.MONGO_URI;

    app.listen(PORT, () =>
      console.log(`App has been started on http://localhost:${PORT}`)
    );
    mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

start();
