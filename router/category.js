const express = require("express");
const {handleAllCategories} = require("../controllers/categoryControllers");
const router = express.Router();

router.route("/allcategories").get(handleAllCategories);

module.exports = router;
