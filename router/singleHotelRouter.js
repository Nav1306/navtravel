const express = require("express");
const {handleShowSingleHotel} = require("../controllers/singleHotelControllers");
const router = express.Router();

router.route("/:id").get(handleShowSingleHotel);

module.exports = router;
