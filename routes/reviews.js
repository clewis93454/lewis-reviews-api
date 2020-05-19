const express = require("express");
const router = express.Router();
const reviewsList = require("../data/reviews-list-sample");
const reviewData = require("../data/review-sample-1");

router.get("/list", (req, res) => {
  res.send(reviewsList);
});

router.get("/:id", (req, res) => {
  res.send(`id is set to ${req.params.id}`);
});

module.exports = router;
