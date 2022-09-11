import { Router } from "express";
import cardsRouter from "./cardRouter.js";
import credentialRouter from "./credentialRouter.js";
import notesRouter from "./notesRouter.js";
import userRouter from "./userRouter.js";

const router = Router()

router.use(userRouter);
router.use(credentialRouter);
router.use(notesRouter)
router.use(cardsRouter)

export default router