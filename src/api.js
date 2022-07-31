import express from "express";
import { productRouter } from "./routes/productsRouter.js";
import { clientsRouter } from "./routes/clientsRouter.js";
import { ordersRouter } from "./routes/ordersRouter.js";
import { categoriesRouter } from "./routes/categoriesRouter.js";
import { adminRouter } from "./routes/adminsRouter.js";

const api = express.Router();

api.use("/", adminRouter);
api.use("/products", productRouter);
api.use("/clients", clientsRouter);
api.use("/orders", ordersRouter);
api.use("/categories", categoriesRouter);
api.use("/public", express.static("public"));

export default api;
