const mongoose = require("mongoose");
const colors = require("colors");

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`DB Connected`.bgYellow.black);
  } catch (error) {
    console.log(`Error occur dutring db connection ${error}`.bgRed.white);
  }
};

module.exports = DBConnection;
