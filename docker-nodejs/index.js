const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
const connectTodB = require("./config/db");

connectTodB();

app.get("/", (req, res) => {
  res.send("Ramanda Ajisaka Asyraf sayang banget sama Silvia Ranti");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
