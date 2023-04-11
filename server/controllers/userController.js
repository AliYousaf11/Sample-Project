const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
//.......signup......
const Signup = async (req, res) => {
  const { name, email, password, confirmpassword, Gender, phone, image } =
    req.body;
  try {
    const userExit = await userModel.findOne({ email });
    if (userExit) {
      res.status(200).json({
        success: false,
        messgae: "User Exit.....",
      });
    } else {
      const AddUser = new userModel({
        name,
        email,
        password,
        confirmpassword,
        Gender,
        phone,
        image,
      });
      await AddUser.save();
      res.status(200).json({
        success: true,
        messgae: "Signup Successfully.....",
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      messgae: "Signup un-Successfully.....",
    });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExit = await userModel.findOne({ email: email });
    if (userExit) {
      if (password === userExit.password) {
        const token = jwt.sign(
          { _id: userExit._id },
          "dsdasfsdfsdfsdafsdfsdfasdfasfdsfasdfasdfdsf",
          {
            expiresIn: 20,
          }
        );
        res.status(200).json({
          success: true,
          token,
          messgae: "Login Successfully.....",
        });
      } else {
        res.status(200).json({
          success: false,
          messgae: "User Not Found.....",
        });
      }
    } else {
      res.status(200).json({
        success: false,
        messgae: "User Not Found.....",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      messgae: "Issue.....",
    });
  }
};

const Contact = async (req, res) => {
  const { name, email, comments } = req.body;
  try {
    const userexit = await userModel.findOne({ email: email });
    if (userexit) {
      if (name === userexit.name) {
        userexit.comments = comments;
        await userexit.save();

        res.status(200).json({
          success: true,
          messgae: "Thanks for comment's.....",
        });
      } else {
        res.status(200).json({
          success: false,
          messgae: "User Not Found.....",
        });
      }
    } else {
      res.status(200).json({
        success: false,
        messgae: "User Not Found.....",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      messgae: "Issue.....",
    });
  }
};

module.exports = {
  Signup,
  Login,
  Contact,
};
