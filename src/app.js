import express from "express";
import cors from "cors";
import api from "./api.js";

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://dashboardsmmobile.web.app/"],
  })
);

app.use(express.json());

app.use("/", api);
