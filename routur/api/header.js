const express = require('express');
const { createHeaderController, updateHeaderController, getHeaderController } = require('../../controllers/header.controller');
const router = express.Router();

router.post("/create", createHeaderController)
router.put("/update/:id", updateHeaderController)
router.get("/getheader", getHeaderController)

module.exports = router;