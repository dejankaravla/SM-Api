import productsDatabase from "./productsDatabase.js";

export const findProduct = async (id) => {
  return await productsDatabase.findOne(id)
}

export const pushProduct = async (product) => {
  try {
    await productsDatabase.updateOne({
      ...product
    }, { ...product }, { upsert: true })

  } catch (error) {
    console.log(error);
  }
}

export const getProducts = async () => {
  return await productsDatabase.find({})
}

export const deleteProduct = async (id) => {
  return await productsDatabase.deleteOne({
    _id: id
  })
}
