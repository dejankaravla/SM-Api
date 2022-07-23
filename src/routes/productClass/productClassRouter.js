import express from "express";
import {
  httpPushClass,
  httpGetAllProductClass,
  httpDeleteProductClass,
  httpPatchProductClassById,
} from "./productClassController.js";

export const productClassRouter = express.Router();

productClassRouter.get("/", httpGetAllProductClass);

productClassRouter.post("/", httpPushClass);

productClassRouter.patch("/", httpPatchProductClassById);

productClassRouter.delete("/:id", httpDeleteProductClass);
