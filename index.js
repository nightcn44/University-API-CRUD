const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(cors());

readdirSync("./routes").map((i) => {
  try {
    app.use("/api", require("./routes/" + i));
    console.log(`Loading route: ${i}`);
  } catch (err) {
    console.log(`Error loading route ${i}:`, err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
