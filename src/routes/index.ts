import { Router } from "express";
import credentialRouter from "./credentialRouter.js";
import notesRouter from "./notesRouter.js";
import userRouter from "./userRouter.js";

const router = Router()

router.use(userRouter);
router.use(credentialRouter);
router.use(notesRouter)

export default router