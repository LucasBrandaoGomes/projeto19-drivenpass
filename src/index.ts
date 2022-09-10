import cors from "cors";
import express, { json } from "express";
import dotenv from "dotenv";
import "express-async-errors";
import errorHandlingMiddleware from "./middlewares/errorHandlerMiddlewares.js";
import router from "./routes/index.js"

dotenv.config();

const app = express()

app.use(cors())
app.use(json())
app.use(router)
app.use(errorHandlingMiddleware)


const PORT : number = Number(process.env.PORT || 5000)

app.listen(PORT,() => {console.log(`Server runing on port ${PORT}`)})