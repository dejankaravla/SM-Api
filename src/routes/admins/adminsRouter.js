import express from "express";
import { httpFindAdmin } from "./adminsController.js";

export const adminRouter = express.Router();

adminRouter.get("/", httpFindAdmin);
