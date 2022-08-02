import http from 'http'
import mongoose from 'mongoose'
import 'dotenv/config'
import { app } from './app.js'
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = "mongodb+srv://heroku:heroku@cluster0.xrgkt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



const PORT = process.env.PORT || 80;


const MONGO_URL = "mongodb://localhost:27017/SM"

const server = http.createServer(app)

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready');
})

mongoose.connection.on('error', (err) => {
  console.log(err);
})

const startServer = async () => {
  await mongoose.connect(uri)

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} `);
  })
}

startServer()