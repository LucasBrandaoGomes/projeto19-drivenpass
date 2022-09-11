import { Router } from "express";

import * as schemas from "../schemas/schemas.js";
import * as controller from "../controllers/notesControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { checkAuthentication } from "../middlewares/tokenValidationMiddleware.js";

const notesRouter = Router()

notesRouter.post('/notes', checkAuthentication, validateSchemaMiddleware(schemas.newNoteSchema), controller.createNote);
notesRouter.get('/notes', checkAuthentication, controller.getAllNotes)
notesRouter.get('/notes/:id', checkAuthentication, controller.getOneNote)
notesRouter.delete('/notes/delete/:id', checkAuthentication, controller.deleteOneNote)

export default notesRouter