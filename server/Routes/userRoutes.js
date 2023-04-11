const express = require("express");
const router = express.Router();
const { Signup, Login, Contact } = require("../controllers/userController");

// routes....
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/contact", Contact);

module.exports = router;
