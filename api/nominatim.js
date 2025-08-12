const axios = require("axios");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, I am proxy");
});

app.get("/nominatim/reverse", async (req, res) => {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/reverse",
      { params: req.query }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Request failed" });
  }
});

app.get("/nominatim/details", async (req, res) => {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/details",
      { params: req.query }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Request failed" });
  }
});

app.listen(3000, () => console.log(`Local proxy running on port 3000`));

module.exports = app;
