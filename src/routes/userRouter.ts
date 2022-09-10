
import { Router } from "express";

import * as schemas from "../schemas/schemas.js";
import * as controller from "../controllers/userControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const userRouter = Router()

userRouter.post('/sign-up', validateSchemaMiddleware(schemas.signUpSchema), controller.signUp)
userRouter.post('/sign-in', validateSchemaMiddleware(schemas.signInSchema), controller.signIn)

export default userRouter