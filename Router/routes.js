const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions);

router.get("/results", controller.getResults);


router.get("/",controller.home);
module.exports = router;
