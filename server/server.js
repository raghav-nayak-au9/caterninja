const app = require("./app");
// const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling the Uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to uncaughtException");
  process.exit(1);
});

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotnenv").dotenv.config({ path: "server/config/config.env" });
// dotenv.config({ path: "server/config/config.env" });

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handler unhandled promise rejection handler

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
