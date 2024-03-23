const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { User } = require("../model/user");


const signupHandler = async (req, res) => {
    try {
      const { username, number, email, password } = req.body;
  
      const salt = crypto.randomBytes(16).toString();
      const hashedPassword = crypto
        .createHmac("sha256" , salt)
        .update(password)
        .digest("hex");
  
      const userObject = {
        username,
        number,
        email,
        salt:salt,
        password: hashedPassword,
      };
      const newUser = new User(userObject);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "User cannot be created !" });
    }
  };

  const loginHandler = async (req, res) => {
    try {
      const { email, password } = req.body;
      const isUser = await  User.findOne({ email: email });
      if (!isUser) {
        res.status(401).json({ message: "Invalid Email!" });
      }
      const salt = isUser.salt;
      const hashedPassword = crypto
        .createHmac("sha256" , salt)
        .update(password)
        .digest("hex");
  
      if (isUser.password !== hashedPassword) {
        res.status(401).json({ message: "Incorrect Password !!" });
      } else {
        const {password , salt ,  ...rest} = isUser._doc;
        const accessToken = jwt.sign({username : isUser.username} , process.env.ACCESS_TOKEN)
        res.status(201).json({...rest,accessToken});
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error in login !!" });
    }
  };

  module.exports = {signupHandler,loginHandler}