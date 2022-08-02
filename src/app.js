import express from "express";
import cors from "cors";
import api from "./api.js";

export const app = express();

app.use(
  cors({
    origin: "https://dashboardsmmobile.web.app/",
    preflightContinue: false,
    credentials: true,
  })
);

app.use(express.json());

app.use("/", api);
