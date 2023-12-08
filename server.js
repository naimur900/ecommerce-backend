const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const shopRouter = require("./routes/shopRoute");
const ItemRouter = require("./routes/itemRotue");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;

// Connect database
mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Routes
app.use("/auth", authRouter);
app.use("/item", ItemRouter);
app.use("/shop", shopRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "I am fine",
  });
});

app.listen(port, () => {
  console.log(` Server is listening to ${port}`);
});
