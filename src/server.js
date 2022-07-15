import http from 'http'
import mongoose from 'mongoose'
import 'dotenv/config'
import { app } from './app.js'

const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL

const server = http.createServer(app)

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready');
})

mongoose.connection.on('error', (err) => {
  console.log(err);
})

const startServer = async () => {
  await mongoose.connect(MONGO_URL)

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} `);
  })
}

startServer()