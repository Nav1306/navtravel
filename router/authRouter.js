const express = require("express");
const {signupHandler,loginHandler} = require("../controllers/authControllers");

const router = express.Router();

router.route("/register").post(signupHandler);

router.route("/login").post(loginHandler);

module.exports = router;
