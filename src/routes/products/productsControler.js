import { pushProduct, getProducts, deleteProduct } from "../../models/products/productsModel.js";


export const httpGetAllProducts = async (req, res) => {
  const products = await getProducts()
  return res.status(200).json(products)

}
export const httpPushProduct = async (req, res) => {
  const product = req.body

  if (!product.name || !product.description || !product.price || !product.purchasePrice || product.images.length === 0) {
    return res.status(400).json({
      error: 'Missing required product data'
    })
  }

  product.dateCreated = new Date()
  await pushProduct(product)
  return res.status(200).json(product)
}

export const httpDeleteProduct = async (req, res) => {
  const product = req.body

  if (!product._id) {
    return res.status(400).json({
      error: 'Missing required product data'
    })
  }
  await deleteProduct(product)
  return res.status(200).json(product)
}