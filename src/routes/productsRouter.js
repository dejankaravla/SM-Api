import express from "express";
import {
  httpPushProduct,
  httpGetAllProducts,
  httpDeleteProductById,
  httpFindProductById,
  httpPatchProduct,
} from "../controller/productsControler.js";

import upload from "../utility/uploadFile.js";
export const productRouter = express.Router();

productRouter.get("/", httpGetAllProducts);
productRouter.get("/:id", httpFindProductById);

productRouter.post("/", upload.array("file"), httpPushProduct);

productRouter.patch("/", upload.array("file"), httpPatchProduct);

productRouter.delete("/:id", httpDeleteProductById);
