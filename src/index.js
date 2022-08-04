import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import { app } from "./app.js";

// Mongo Atlas
// import { MongoClient, ServerApiVersion } from 'mongodb'
// const uri = "mongodb+srv://heroku:heroku@cluster0.xrgkt.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const MONGO_URL = "mongodb://localhost:27017/SM"

const PORT = process.env.PORT || 80;
const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

const startServer = async () => {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} `);
  });
};

startServer();
