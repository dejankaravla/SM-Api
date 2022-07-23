import productClassDatabase from "./productClassDatabase.js";

export const findProductClass = async (name) => {
  return await productClassDatabase.findOne(name);
};

export const pushProductClass = async (productClass) => {
  try {
    await productClassDatabase.insertMany(productClass);
  } catch (error) {
    console.log(error);
  }
};

export const getProductClass = async () => {
  return await productClassDatabase.find({});
};

export const deleteProductClass = async (id) => {
  return await productClassDatabase.deleteOne({
    _id: id,
  });
};

export const pathcProductClassById = async (productClass) => {
  return await productClassDatabase.findOneAndUpdate(
    {
      _id: productClass._id,
    },
    {
      ...productClass,
    }
  );
};
