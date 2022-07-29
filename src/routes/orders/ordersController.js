import { pushOrder, getOrders, deleteOrder, findOrder } from "../../models/orders/ordersModel.js";

export const httpGetAllOrders = async (req, res) => {
  const orders = await getOrders();
  return res.status(200).json(orders);
};

export const httpPushOrder = async (req, res) => {
  const order = req.body;
  order.dateCreated = new Date
  order.orderNumber = (await getOrders()).length + 1
  try {
    await pushOrder(order)
    res.status(200).json('Order Created')
  } catch (error) {
    console.log(error.errors);
    res.status(400).json(error)
  }
};

export const httpDeleteOrder = async (req, res) => {
  const order = req.body;

  if (!order._id) {
    return res.status(400).json({
      error: "Missing required order data",
    });
  }

  await deleteOrder(order);
  return res.status(200).json(order);
};
