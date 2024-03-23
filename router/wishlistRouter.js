const express = require("express");

const {verifyUser} = require("../middleware /verifyUser");

const {handleNewWishListItem , handleDeleteWishlistItem , handleShowWishlist} = require("../controllers/wishlistControllers");

const router = express.Router();

router.route("/").post(verifyUser , handleNewWishListItem);

router.route("/:hotelID").delete(verifyUser , handleDeleteWishlistItem);

router.route("/")
.get(verifyUser , handleShowWishlist);

module.exports = router;
