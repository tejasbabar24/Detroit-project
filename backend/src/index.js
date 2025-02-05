import { app } from "./app.js";
import {config} from "dotenv";
import connectDB from "./db/index.js";

config()
connectDB()
    .then(() => {
        const port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log(`http://localhost:${port}`)
        })
    })
    .catch((err) => {
})