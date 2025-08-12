import axios from "axios";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

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

if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Local proxy running on port ${PORT}`));
}

export default app;
