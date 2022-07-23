import express from "express";

import { httpPushOrder, httpGetAllOrders, httpDeleteOrder } from "./ordersController.js";

export const ordersRouter = express.Router();

ordersRouter.get("/", httpGetAllOrders);
ordersRouter.post("/", httpPushOrder);
ordersRouter.delete("/", httpDeleteOrder);
