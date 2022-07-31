import express from "express";
import { pushCategory, getCategories, deleteCategory, patchCategory } from "../controller/categoriesController.js";

export const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);

categoriesRouter.post("/", pushCategory);

categoriesRouter.patch("/", patchCategory);

categoriesRouter.delete("/:id", deleteCategory);
