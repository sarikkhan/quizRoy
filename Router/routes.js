const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions);

router.get("/results", controller.getResults);

module.exports = router;
