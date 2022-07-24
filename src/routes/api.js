import express from "express";
import { productRouter } from "./products/productsRouter.js";
import { clientsRouter } from "./clients/clientsRouter.js";
import { ordersRouter } from "./orders/ordersRouter.js";
import { productClassRouter } from "./productClass/productClassRouter.js";
import { adminRouter } from "./admins/adminsRouter.js";

const api = express.Router();

api.use("/", adminRouter);
api.use("/products", productRouter);
api.use("/clients", clientsRouter);
api.use("/orders", ordersRouter);
api.use("/productClasses", productClassRouter);
api.use("/public", express.static("public"));

export default api;
