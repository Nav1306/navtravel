const {Hotel} = require("../model/hotels");


const handleAllHotels = async(req,res) => {
    try {
        let reqData;
        const reqCategory = req.query.category;
        if(reqCategory){
             reqData = await Hotel.find({category:reqCategory});
        }
        else {
             reqData = await Hotel.find({});
        }
        
        reqData ? res.json(reqData) : res.status(404).json({message : "No data found"})
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {handleAllHotels};