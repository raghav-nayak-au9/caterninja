const Data = require("../Models/data");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const data = require("../data/data.json");

// Setting dotenv file
dotenv.config({ path: "config/config.env" });

connectDatabase();

const seedData = async () => {
  try {
    await Data.deleteMany();
    console.log("All data is deleted");
    await Data.insertMany(data);
    console.log("All data is inserted");
    process.exit();
  } catch (e) {
    console.log(e.message);
    process.exit();
  }
};

seedData();
