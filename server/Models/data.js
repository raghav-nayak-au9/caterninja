const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Please enter an id"],
  },
  city: {
    type: String,
    required: [true, "Please enter a city"],
    trim: true,
  },
  mealsubtype: {
    type: String,
    required: [true, "Please enter a subsubtype"],
    trim: true,
  },
  label: {
    type: String,
    required: [true, "Please enter a label"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Please enter a name"],
    trim: true,
  },
  quantity: {
    type: String,
    required: [true, "Please enter a quantity"],
    trim: true,
  },
  cuisine: {
    type: String,
    required: [true, "Please enter a cuisine"],
    trim: true,
  },
  preference: {
    type: String,
    required: [true, "Please enter a preference"],
    trim: true,
  },
  mealtype: {
    type: String,
    required: [true, "Please enter a meal type"],
    trim: true,
  },
  meal: {
    type: String,
    required: [true, "Please enter a meal"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Data", dataSchema);
