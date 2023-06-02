const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to ${conn.connection.name}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectToDB;
