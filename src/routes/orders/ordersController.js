import { pushOrder, getOrders, deleteOrder } from "../../models/orders/ordersModel.js";

export const httpGetAllOrders = async (req, res) => {
  const orders = await getOrders();
  return res.status(200).json(orders);
};

export const httpPushOrder = async (req, res) => {
  const order = req.body;

  if (!order.client || !order.clientType || order.products.length === 0 || !order.orderPrice) {
    return res.status(400).json({
      error: "Missing required product data",
    });
  }

  if (!order.orderStatus) {
    order.orderStatus = "Poruceno";
  }

  order.dateCreated = new Date();
  await pushOrder(order);
  return res.status(200).json(order);
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
