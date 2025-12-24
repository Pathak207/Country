const express = require("express");
const router = express.Router();
const controller = require("../controllers/country.controller");

router.post("/", controller.createCountry);   // CREATE
router.get("/", controller.getCountries);     // READ
router.put("/:id", controller.updateCountry); // UPDATE
router.delete("/:id", controller.deleteCountry); // DELETE

module.exports = router;
