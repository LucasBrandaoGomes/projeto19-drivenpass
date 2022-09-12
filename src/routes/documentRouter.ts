import { Router } from "express";

import * as schemas from "../schemas/schemas.js";
import * as controller from "../controllers/documentControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { checkAuthentication } from "../middlewares/tokenValidationMiddleware.js";

const documentRouter = Router()

documentRouter.post('/documents', checkAuthentication, validateSchemaMiddleware(schemas.newDocumentSchema), controller.registerDocument);
documentRouter.get('/documents', checkAuthentication, controller.getAllDocuments)
documentRouter.get('/documents/:id', checkAuthentication, controller.getOneDocument)
documentRouter.delete('/documents/delete/:id', checkAuthentication, controller.deleteOneDocument)

export default documentRouter