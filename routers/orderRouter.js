const { Router } = require("express");
const auth = require("../auth/middleware");
const User = require("../models").user;
const Category = require("../models").category;
const Device = require("../models").device;
const Order = require("../models").order;
const OrderDevice = require("../models").orderDevice;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: User });

    res.status(200).send({ message: "ok", orders });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    // const userId = req.body.userId;
    const userId = req.user.id;
    console.log("body", req.body);

    const {
      total,
      shippingAddress: shippingDetails,
      paymentMethod,
      items,
    } = req.body;
    if (!total || !shippingDetails || !paymentMethod) {
      return res.status(400).send("Please provide the details");
    }
    const { fullName, address, city, postalCode } = shippingDetails;
    const shippingAddress = `${fullName} - ${address}, ${city}, ${postalCode}`;

    console.log("The shipping address", shippingAddress);
    const createdOrder = await Order.create({
      total,
      shippingAddress,
      paymentMethod,
      userId,
    });

    const orderId = createdOrder.id;
    console.log("orderId", orderId);

    const createOrderDevicesPromises = items.map(async (item) => {
      console.log(
        orderId,
        "this is order id",
        item.id,
        "this is id",
        item.quantity,
        "this is quantity"
      );
      const orderDevicePromise = await OrderDevice.create({
        quantity: item.quantity,
        orderId,
        deviceId: item.id,
      });
      console.log(orderDevicePromise, "here");
      return orderDevicePromise;
    });

    const resolvedPromises = await Promise.all(createOrderDevicesPromises);
    console.log("resolved", resolvedPromises);

    res.status(201).send({ message: "New Order Created", order: createdOrder });
  } catch (e) {
    console.log("Error", e);
  }
});

module.exports = router;
