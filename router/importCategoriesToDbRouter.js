const express = require("express");
const router = express.Router();

const { Category } = require("../model/category");
const categories = require("../data/categories");

router.route("/add").post(async (req, res) => {
  try {
    await Category.deleteMany()
    const reqData = await Category.insertMany(categories.data);
    if(reqData){
        res.json(reqData);
    }
  } catch (error) {
    console.log(error);
    res.json({message:"Cannot add categories !"});
  }
});

module.exports = router;
