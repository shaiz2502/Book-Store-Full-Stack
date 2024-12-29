import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = "mongodb://localhost:27017/bookStore";

try {
  mongoose.connect(URI, {});
  console.log("Connected to MongoDB")
} catch (error) {
  console.log("Error: ", error);
}


// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})