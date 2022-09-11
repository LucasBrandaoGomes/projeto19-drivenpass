import { Router } from "express";

import * as schemas from "../schemas/schemas.js";
import * as controller from "../controllers/cardControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { checkAuthentication } from "../middlewares/tokenValidationMiddleware.js";

const cardsRouter = Router()

cardsRouter.post('/cards', checkAuthentication, validateSchemaMiddleware(schemas.newCardSchema), controller.registerCard);
cardsRouter.get('/cards', checkAuthentication, controller.getAllCards)
cardsRouter.get('/cards/:id', checkAuthentication, controller.getOneCard)
cardsRouter.delete('/cards/delete/:id', checkAuthentication, controller.deleteOneCard)

export default cardsRouter