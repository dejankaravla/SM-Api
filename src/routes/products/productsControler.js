import {
  pushProduct,
  getProducts,
  deleteProduct,
  findProductByName,
  findProductById,
  pathcProduct,
} from "../../models/products/productsModel.js";
import path from "path";
import Resize from "./resizeFile.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const httpGetAllProducts = async (req, res) => {
  const query = req.query;
  const products = await getProducts(query);
  return res.status(200).json(products);
};
export const httpPushProduct = async (req, res) => {
  const product = req.body;
  const files = req.files;
  const images = [];

  const imagePath = path.join(__dirname, "../../../public/productImages");
  const fileUpload = new Resize(imagePath);

  for (let index = 0; index < files.length; index++) {
    const fileName = await fileUpload.save(files[index].buffer);

    images.push(fileName);
  }

  product.images = [...images];

  if (!product.name || !product.price || !product.productClass || !product.productSubclass) {
    return res.status(400).json({
      error: "Missing required product data",
    });
  }

  if (await findProductByName({ name: product.name })) {
    return res.status(400).json({
      error: "Proizvod sa istim nazivom vec postoji",
    });
  }

  if (!product.published) {
    product.published = true;
  }
  product.dateCreated = new Date();
  await pushProduct(product);
  return res.status(200).json(product);
};

export const httpFindProductById = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(400).json("Missing product ID");
  }
  const product = await findProductById(productId);
  if (!product) {
    return res.status(400).json("Product not found");
  }
  return res.status(200).json(product);
};

export const httpDeleteProductById = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(400).json({
      error: "Missing product ID",
    });
  }
  await deleteProduct(productId);
  return res.status(200).json("Product Deleted");
};

export const httpPatchProduct = async (req, res) => {
  const product = req.body;
  const files = req.files;
  const images = [];
  console.log(product);

  const imagePath = path.join(__dirname, "../../../public/productImages");
  const fileUpload = new Resize(imagePath);

  for (let index = 0; index < files.length; index++) {
    const fileName = await fileUpload.save(files[index].buffer);

    images.push(fileName);
  }

  product.images = [...images];

  if (!product.name || !product.price || !product.productClass || !product.productSubclass) {
    return res.status(400).json({
      error: "Missing required product data",
    });
  }

  const productFromDB = await findProductByName({ name: product.name });

  if (productFromDB && productFromDB._id && productFromDB._id.toString() !== product._id) {
    return res.status(400).json({
      error: "Proizvod sa istim nazivom vec postoji",
    });
  }

  await pathcProduct(product);
  return res.status(200).json(`${product.name} modified.`);
};
