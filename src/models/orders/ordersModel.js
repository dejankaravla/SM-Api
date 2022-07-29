import ordersDatabase from "./ordersDatabase.js";

export const findOrder = async (data) => {
  return await ordersDatabase.findOne(data);
};

export const pushOrder = async (order) => {
  await ordersDatabase.insertMany(order);
};

export const getOrders = async () => {
  return await ordersDatabase.find();
};

export const deleteOrder = async (data) => {
  return await ordersDatabase.deleteOne(data);
};
