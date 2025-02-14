import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    credentials:true
}));
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())
app.set("trust proxy",1);


import userRouter from "./routes/user.routes.js";
import categoryRouter from "./routes/category.routes.js"
import productRouter from "./routes/products.routes.js"
import mailRouter from "./routes/sendMail.routes.js";
import { errorHandler } from "./middlewares/errorHandling.middlewares.js";


app.use("/api/user", userRouter)
app.use("/api/category", categoryRouter)
app.use("/api/product", productRouter)
app.use("/api/mail", mailRouter)
app.use(errorHandler)
export { app }
