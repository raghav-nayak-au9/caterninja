const Data = require("../../Models/data");

exports.getStarterData = async (req, res, next) => {
  const data = await Data.find({ mealtype: "Starter" });

  res.status(200).json({
    success: true,
    data,
  });
};
