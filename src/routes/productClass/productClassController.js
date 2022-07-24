import {
  pushProductClass,
  getProductClass,
  deleteProductClass,
  findProductClass,
  pathcProductClassById,
} from "../../models/productClass/productClassModel.js";

export const httpGetAllProductClass = async (req, res) => {
  const classes = await getProductClass();
  return res.status(200).json(classes);
};

export const httpPushClass = async (req, res) => {
  const productClass = req.body;
  // Greska
  if (!productClass.name.value || !productClass.name.label) {
    return res.status(400).json({
      error: "Missing required product data",
    });
  }

  if (await findProductClass({ name: { value: productClass.name.value, label: productClass.name.label } })) {
    return res.status(400).json({
      error: "Product class allready exists",
    });
  }

  productClass.dateCreated = new Date();
  await pushProductClass(productClass);
  return res.status(200).json(productClass);
};

export const httpDeleteProductClass = async (req, res) => {
  const classID = req.params.id;
  if (!classID) {
    return res.status(400).json({
      error: "Missing product ID",
    });
  }
  await deleteProductClass(classID);
  return res.status(200).json(classID);
};

export const httpPatchProductClassById = async (req, res) => {
  const productClass = req.body;
  if (!productClass.name) {
    return res.status(400).json({
      error: "Missing product Class",
    });
  }

  productClass.dateModified = new Date();

  await pathcProductClassById(productClass);
  return res.status(200).json(`${productClass.name.label} is successfully updated.`);
};
