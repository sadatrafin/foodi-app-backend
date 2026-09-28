const express = require("express");
const router = express.Router();
const header = require("./header");
const banner = require("./banner");
const popularCategories = require("./popularCatagories");

router.use("/header", header);
router.use("/banner", banner);
router.use("/popular-category", popularCategories);

module.exports = router; 