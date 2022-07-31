import express from "express";
import { httpFindAdmin } from "../controller/adminsController.js";

export const adminRouter = express.Router();

adminRouter.get("/", httpFindAdmin);
