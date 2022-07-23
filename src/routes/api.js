import express from "express";
import { productRouter } from "./products/productsRouter.js";
import { usersRouter } from "./users/usersRouter.js";
import { ordersRouter } from "./orders/ordersRouter.js";
import { productClassRouter } from "./productClass/productClassRouter.js";

const api = express.Router();

api.use("/products", productRouter);
api.use("/users", usersRouter);
api.use("/orders", ordersRouter);
api.use("/productClasses", productClassRouter);
api.use("/public", express.static("public"));

export default api;
