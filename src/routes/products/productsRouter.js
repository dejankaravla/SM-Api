import express from "express";
import { httpPushProduct, httpGetAllProducts, httpDeleteProduct } from "./productsControler.js";


export const productRouter = express.Router()

productRouter.get('/', httpGetAllProducts)
productRouter.post('/', httpPushProduct)
productRouter.delete('/', httpDeleteProduct)