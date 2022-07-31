import express from "express";

import {
  httpPushOrder,
  httpGetAllOrders,
  httpDeleteOrder,
  findOrder,
  patchOrder,
} from "../controller/ordersController.js";

export const ordersRouter = express.Router();

ordersRouter.get("/", httpGetAllOrders);
ordersRouter.get("/:id", findOrder);
ordersRouter.post("/", httpPushOrder);
ordersRouter.patch("/", patchOrder);
ordersRouter.delete("/", httpDeleteOrder);
