const Country = require("../models/country.model");

/* CREATE */
exports.createCountry = async (req, res) => {
  try {
    const { country, capital } = req.body;

    const data = await Country.create({ country, capital });

    res.status(201).json({
      success: true,
      message: "Country saved successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* GET ALL */
exports.getCountries = async (req, res) => {
  const data = await Country.find();
  res.json({ success: true, data });
};

/* UPDATE */
exports.updateCountry = async (req, res) => {
  const data = await Country.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json({ success: true, data });
};

/* DELETE */
exports.deleteCountry = async (req, res) => {
  await Country.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Deleted successfully" });
};
