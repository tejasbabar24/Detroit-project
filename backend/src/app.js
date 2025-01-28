import express from "express"

const app = express()


app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())
app.set("trust proxy",1);


import userRouter from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errorHandling.middlewares.js";


app.use("/api/user", userRouter)
app.use(errorHandler)
export { app }
