// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();
// const hotels = require("../data/hotels");
// const { Hotel } = require("../model/hotels");

// router.route("/add")
// .post (async (req,res) => {
//     try {
//         await Hotel.deleteMany();
//         const hotelsInDb =  await Hotel.insertMany(hotels.data);
//         res.json(hotelsInDb);
//     } catch (error) {
//         res.json({message : "Could not add data to the database"})
//         console.log(error);
//     }
   
// })

// module.exports = router;