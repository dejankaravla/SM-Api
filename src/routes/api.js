import express from "express";
import { productRouter } from "./products/productsRouter.js";
import { usersRouter } from "./users/usersRouter.js";

const api = express.Router()

api.use('/products', productRouter)
api.use('/users', usersRouter)

export default api