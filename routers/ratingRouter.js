const { Router } = require("express");
const auth = require("../auth/middleware");
// const Device = require("../models").device;

const Rating = require("../models").rating;

const router = new Router();

// Get all categories
router.get("/", async (req, res, next) => {
  try {
    const ratings = await Rating.findAll();
    //console.log(categories);
    res.status(200).send({
      message: "ok",
      ratings: ratings.sort((fst, snd) => fst.id - snd.id),
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
