const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://admin:Cheese21@cluster0.bujok.mongodb.net/train-app-DB");

//require route
app.use("/", require("./routes/bookingRoute"));
app.use("/", require("./routes/userRoute"));

if (process.env.NODE_ENV !== "test") {
    app.listen(3001, () => console.log(`Server Running on ${3001}`));
  }

module.exports = app;