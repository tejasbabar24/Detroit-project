import { app } from "./app.js";
import {config} from "dotenv";
import connectDB from "./db/index.js";

config()
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
        })
    })
    .catch((err) => {
})