const { Hotel } = require("../model/hotels");


const handleShowSingleHotel = async (req, res) => {
    try {
      const id = req.params.id;
      const hotel = await Hotel.findById(id);
      hotel
        ? res.send(hotel)
        : res.status(404).json({ message: "Hotel Not Found!" });
    } catch (error) {
      console.log(error);
    }
  };


  module.exports = {handleShowSingleHotel};