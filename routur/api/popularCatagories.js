const express = require("express");
const {
  popularCategoryCreateController,
  popularCategoryUpdateController,
  getPopularCategoryController,
  popularCategoryDeleteController,
} = require("../../controllers/popularCatagories");
const router = express.Router();

router.post("/create", popularCategoryCreateController);
router.put("/update/:id", popularCategoryUpdateController);
router.get("/get", getPopularCategoryController);
router.delete('/delete/:id', popularCategoryDeleteController)
module.exports = router;