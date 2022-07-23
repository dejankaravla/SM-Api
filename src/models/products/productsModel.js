import productsDatabase from "./productsDatabase.js";

export const getProducts = async (req) => {
  return await productsDatabase.find({ ...req });
};

export const findProductByName = async (name) => {
  return await productsDatabase.findOne(name);
};

export const findProductById = async (id) => {
  const newData = await productsDatabase.findOne({ _id: id });
  return newData;
};

export const pushProduct = async (product) => {
  try {
    await productsDatabase.insertMany(product);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  return await productsDatabase.deleteOne({
    _id: id,
  });
};

export const pathcProduct = async (product) => {
  return await productsDatabase.findOneAndUpdate(
    {
      _id: product._id,
    },
    {
      ...product,
    }
  );
};
