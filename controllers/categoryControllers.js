const {Category} = require("../model/category");


const handleAllCategories = async (req, res) => {
    try {
      const reqData = await Category.find({});
      if (reqData) {
        res.json(reqData);
      }
    } catch (error) {
      console.log(error);
      res.json({ message: "Cannot find Categories" });
    }
  }
  module.exports = {handleAllCategories};