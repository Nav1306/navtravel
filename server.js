const express = require("express");
const hotelRouter = require("./router/hotelRouter");
const { connectDB } = require("./config /dbconfig");
const mongoose = require("mongoose");
const importHotelDataRouter = require("./router/importHotelDataRouter");
const importCategoriesToDbRouter = require("./router/importCategoriesToDbRouter");
const categoryRouter = require("./router/category");
const singleHotelRouter = require("./router/singleHotelRouter");
const authRouter = require("./router/authRouter");
const wishlistRouter = require("./router/wishlistRouter");

const app = express();

const PORT = 3500;

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello Geeks !!");
});

app.use("/api/hoteldata" , importHotelDataRouter);
app.use("/api/categorydata" , importCategoriesToDbRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/categories" , categoryRouter);
app.use("/api/hotels" , singleHotelRouter);
app.use("/api/auth" , authRouter);
app.use("/api/wishlist" , wishlistRouter);


mongoose.connection.once("open", () => {
  console.log("Connected to the database !");
  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is up and running !!");
  });
});
