import ordersDatabase from "./ordersDatabase.js";

export const findOrder = async (id) => {
  return await ordersDatabase.findOne(id);
};

export const pushOrder = async (order) => {
  try {
    await ordersDatabase.updateOne(
      {
        ...order,
      },
      {
        ...order,
      },
      { upsert: true }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async () => {
  return await ordersDatabase.find({});
};

export const deleteOrder = async () => {
  return await ordersDatabase.deleteOne({
    _id: id,
  });
};
