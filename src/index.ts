import cors from "cors";
import express, { json } from "express";
import dotenv from "dotenv";
import "express-async-errors";

dotenv.config();

const app = express()

app.use(cors())
app.use(json())


const PORT : number = Number(process.env.PORT || 5000)

app.listen(PORT,() => {console.log(`Server runing on port ${PORT}`)})