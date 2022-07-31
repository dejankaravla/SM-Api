import express from "express";
import {
  httpGetAllClients,
  httpPushClient,
  httpDeleteClientById,
  httpFindClientById,
  httpPatchClient,
} from "../controller/clientsControllers.js";

export const clientsRouter = express.Router();

clientsRouter.get("/", httpGetAllClients);
clientsRouter.get("/:id", httpFindClientById);

clientsRouter.post("/", httpPushClient);

clientsRouter.patch("/", httpPatchClient);

clientsRouter.delete("/:id", httpDeleteClientById);
