const express = require('express');
const { createBannerController, updateBannerController, GetBannerController } = require('../../controllers/banner.controller');
const router = express.Router();

router.post("/create", createBannerController)
router.put("/update/:id", updateBannerController)
router.get("/getbanner", GetBannerController)

module.exports = router;