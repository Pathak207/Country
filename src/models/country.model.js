const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Country", countrySchema);
