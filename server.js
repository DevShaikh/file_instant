const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

// Load .env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
const users = require("./routes/users");

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/users", users);

const PORT = process.env.PORT || 7750;

app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: {},
  });
});

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline.bold
  )
);
