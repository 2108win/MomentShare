import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = 8000;

const app = express();

// console.log('process.env.MONGO_URL: ', process.env.MONGO_URL);
const userRoute = require("./Router/UserRouter");
// DB connection
mongoose
    .connect(process.env.MONGO_URL || "", {})
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });

// Middleware for cors to allow cross origin resource sharing
app.use(cors());
// Middleware to convert our request data into JSON format
app.use(bodyParser.json());

// Include the todoRoutes
app.use("/api", userRoute);

// Start the server on port 8000
app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
