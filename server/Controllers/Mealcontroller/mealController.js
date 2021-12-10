const Data = require("../../Models/data");

exports.getMealData = async (req, res, next) => {
  const city_data = req.body.city;
  const meal_data = req.body.preference;

  // console.log(city_data, meal_data);

  const data1 = await Data.find({
    city: city_data,
    preference: meal_data,
  }).exec();

  //   console.log(data1);

  res.status(200).json({
    success: true,
    data1,
  });
};
