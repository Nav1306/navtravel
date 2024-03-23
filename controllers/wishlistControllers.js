const { Wishlist } = require("../model/wishlist");


const handleNewWishListItem = async (req, res) => {
    const { hotelID } = req.body;
    try {
      const newHotelInWishlist = new Wishlist({
        hotelID: hotelID,
      });
      const savedHotelInWishlist = await newHotelInWishlist.save();
      res.status(201).json(savedHotelInWishlist);
    } catch (error) {
      res.status(500).json({ message: "Some Error Occurred !!" });
      console.log(error);
    }
  };

  const handleDeleteWishlistItem = async (req, res) => {
    try {
      const reqHotel = await Wishlist.findOne({ hotelID: req.params.hotelID });
      const id = reqHotel._id;
      const deletedHotel = await Wishlist.findByIdAndDelete(id);
      res.status(201).json(deletedHotel);
    } catch (error) {
      console.log(error);
      res.status(500).json({message : "Error Occurred !!"});
    }
  };

  const handleShowWishlist = async(req,res) => {
    try {
        const wishlist = await Wishlist.find({});
        wishlist ? res.status(201).json(wishlist) : res.json({message:"No items found !"});
    } catch (error) {
        res.status(500).json({message : "Some Error Occurred !!"});
        console.log(error);
    }
   
}

  module.exports = {handleNewWishListItem , handleDeleteWishlistItem , handleShowWishlist};