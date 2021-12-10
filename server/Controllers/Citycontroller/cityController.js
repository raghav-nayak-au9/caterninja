const Data = require("../../Models/data");

exports.getCityData = async (req, res, next) => {
  const data = req.body.city;

  const data1 = await Data.find({ city: { $in: [data] } });

  res.status(200).json({
    success: true,
    data1,
  });
};
