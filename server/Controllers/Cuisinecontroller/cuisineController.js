const Data = require("../../Models/data");

exports.cuisineController = async (req, res, next) => {
  const city_data = req.body.city_value;
  const meal_data = req.body.meal_preference;
  const cuisine_data = req.body.cuisine;

  //   const data1 = await Data.find({
  //     city: city_data,
  //     preference: meal_data,
  //     cuisine: cuisine_data,
  //   }).exec();

  if (cuisine_data === "Indian && PanAsian") {
    var data1 = await Data.find({
      city: city_data,
      preference: meal_data,
      cuisine: ["Indian", "PanAsian"],
    });
  } else if (cuisine_data === "Indian && Continental") {
    var data1 = await Data.find({
      city: city_data,
      preference: meal_data,
      cuisine: ["Indian", "Continental"],
    });
  } else if (cuisine_data === "Multicuisine") {
    var data1 = await Data.find({
      city: city_data,
      preference: meal_data,
    });
  } else {
    var data1 = await Data.find({
      city: city_data,
      preference: meal_data,
      cuisine: cuisine_data,
    }).exec();
  }

  res.status(200).json({
    success: true,
    data1,
  });
};
