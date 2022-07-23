import productsDatabase from "../products/productsDatabase";

export const findProductsBySubclass = async (productClass) => {
  const products = await productsDatabase.find({ productClass: productClass });
};

findProductsBySubclass("samsung");
