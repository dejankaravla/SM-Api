import express from "express";
import cors from "cors";
import api from "./api.js";

export const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", api);
