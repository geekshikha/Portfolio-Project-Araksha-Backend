const { Router } = require("express");
const auth = require("../auth/middleware");
const Category = require("../models").category;
const Device = require("../models").device;
const Rating = require("../models").rating;

const router = new Router();

// Get all categories
router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({ include: Device });
    //console.log(categories);
    res.status(200).send({
      message: "ok",
      categories: categories.sort((fst, snd) => fst.id - snd.id),
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// GET Categories by id - see all the devices of category(id).
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //console.log(id);

    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "Category id is not a number" });
    }

    const categories = await Category.findByPk(id, {
      // include: [Device],
      include: [{ model: Device, include: [Rating] }],
    });
    // console.log("category", categories);

    if (categories === null) {
      return res.status(404).send({ message: "Category not found" });
    }

    res.status(200).send({ message: "ok", categories });
  } catch (error) {
    next(error);
  }
});

//detail page of device in category
router.get("/device/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "device id is not a number" });
  }

  const device = await Device.findByPk(id);
  console.log("device", device);

  if (device === null) {
    return res.status(404).send({ message: "device not found" });
  }

  res.status(200).send({ message: "ok", device });
});

module.exports = router;
