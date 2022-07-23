import express from "express";
import {
  httpPushProduct,
  httpGetAllProducts,
  httpDeleteProductById,
  httpFindProductById,
  httpPatchProduct,
} from "./productsControler.js";

import upload from "./uploadFile.js";
export const productRouter = express.Router();

productRouter.get("/", httpGetAllProducts);
productRouter.get("/:id", httpFindProductById);

productRouter.post("/", upload.array("file"), httpPushProduct);

productRouter.patch("/", upload.array("file"), httpPatchProduct);

productRouter.delete("/:id", httpDeleteProductById);
