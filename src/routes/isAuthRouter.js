import express from "express";
import { verigyJWT } from "../controller/adminAuth.js";

export const authRouter = express.Router();

authRouter.get("/", verigyJWT);
