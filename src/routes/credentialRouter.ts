import { Router } from "express";

import * as schemas from "../schemas/schemas.js";
import * as controller from "../controllers/credentialControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { checkAuthentication } from "../middlewares/tokenValidationMiddleware.js";

const credentialRouter = Router()

credentialRouter.post('/credentials', checkAuthentication, validateSchemaMiddleware(schemas.newCredentialSchema), controller.createCredential);
credentialRouter.get('/credentials', checkAuthentication, controller.getAllCredentials)
credentialRouter.get('/credentials/:id', checkAuthentication, controller.getOneCredential)
credentialRouter.delete('/credentials/delete/:id', checkAuthentication, controller.deleteOneCredential)

export default credentialRouter