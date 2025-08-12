const axios = require("axios");

module.exports = async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/details",
      {
        params: req.query,
        headers: {
          "User-Agent": "GeoLookProxy/1.0 (olkakorolcuk@gmail.com)",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Request failed" });
  }
};
