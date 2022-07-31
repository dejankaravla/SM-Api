import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import api from "./api.js";

const __fileName = fileURLToPath(import.meta.url);
// const __dirName = path.dirname(__fileName);

export const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/", api);
