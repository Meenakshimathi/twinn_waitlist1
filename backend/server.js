require("dotenv").config();

console.log("MONGO_URI =", process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/waitlist", require("./routes/waitlistRoutes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});