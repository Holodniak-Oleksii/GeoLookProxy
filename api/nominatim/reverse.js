const axios = require("axios");

module.exports = async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/reverse",
      {
        params: req.query,
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Request failed" });
  }
};
