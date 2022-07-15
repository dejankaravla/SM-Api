import express from "express";
import { httpGetAllUsers, httpPushUsers, httpDeleteUser } from "./usersControllers.js";

export const usersRouter = express.Router()

usersRouter.get('/', httpGetAllUsers)
usersRouter.post('/', httpPushUsers)
usersRouter.delete('/', httpDeleteUser)