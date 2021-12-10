const Data = require("../../Models/data");
const ErrorHandler = require("../../utils/errorHandler");
const catchAsyncErrors = require("../../Middlewares/catchAsyncErrors");

// Create a new data instance  => /api/v1/adddata/new (admin Route)

exports.createData = catchAsyncErrors(async (req, res, next) => {
  let data = await Data.create(req.body);
  res.status(201).json({
    success: true,
    data,
  });
});

// Get all data from the database   => /api/v1/alldata (admin and user route)
exports.getData = catchAsyncErrors(async (req, res, next) => {
  let data = await Data.find();
  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
});

// Get  all details of the single data item  =>  /api/v1/data/:id (admin and user route)

exports.getSingleData = catchAsyncErrors(async (req, res, next) => {
  let data = await Data.findById(req.params.id);

  if (!data) {
    // return res.status(404).json({
    //   success: false,
    //   message: "Data not found",
    // });
    return next(new ErrorHandler("Data Not found", 404));
  }

  res.status(200).json({
    success: true,
    data,
  });
});

// Update singledata Details   => /api/v1/data/:id   (admin role)

exports.updateData = catchAsyncErrors(async (req, res, next) => {
  let data = await Data.findById(req.params.id);

  if (!data) {
    // return res.status(404).json({
    //   success: false,
    //   message: "Data not found",
    // });
    return next(new ErrorHandler("Data Not found", 404));
  }

  data = await Data.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data,
  });
});

// Update Singledata Details   => /api/v1/data/:id   (admin role)

exports.deleteData = catchAsyncErrors(async (req, res, next) => {
  let data = await Data.findById(req.params.id);

  if (!data) {
    // return res.status(404).json({
    //   success: false,
    //   message: "Data not found",
    // });
    return next(new ErrorHandler("Data Not found", 404));
  }

  await data.remove();
  res.status(200).json({
    success: true,
    message: "Data deleted successfully",
  });
});
