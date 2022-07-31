import ordersDatabase from "../models/ordersDatabase.js";

export const httpGetAllOrders = async (req, res) => {
  const query = req.query;
  const orders = await ordersDatabase.find(query);
  return res.status(200).json(orders);
};

export const httpPushOrder = async (req, res) => {
  const order = req.body;
  order.dateCreated = new Date();
  order.orderNumber = (await ordersDatabase.find()).length + 1;
  try {
    await ordersDatabase.insertMany(order);
    res.status(200).json("Order Created");
  } catch (error) {
    console.log(error.errors);
    res.status(400).json(error);
  }
};

export const httpDeleteOrder = async (req, res) => {
  const order = req.body;

  if (!order._id) {
    return res.status(400).json({
      error: "Missing required order data",
    });
  }

  await ordersDatabase.deleteOne(order);
  return res.status(200).json(order);
};

export const findOrder = async (req, res) => {
  const orderId = req.params.id;
  const order = await ordersDatabase.findOne({
    _id: orderId,
  });
  console.log(order);
  return res.status(200).json(order);
};

export const patchOrder = async (req, res) => {
  const order = req.body;
  console.log(order);
  order.dateModified = new Date();

  await ordersDatabase.findByIdAndUpdate(
    {
      _id: order._id,
    },
    {
      ...order,
    }
  );

  return res.status(200).json(`Order modified`);
};
