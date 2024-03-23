const express = require("express");
const router = express.Router();
const {handleAllHotels} = require("../controllers/hotelControllers");

router.route("/allhotels")
.get(handleAllHotels);

module.exports = router ;