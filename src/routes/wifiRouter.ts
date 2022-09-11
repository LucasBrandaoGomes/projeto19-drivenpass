import { Router } from "express";

import * as schemas from "../schemas/schemas.js";
import * as controller from "../controllers/wifiControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { checkAuthentication } from "../middlewares/tokenValidationMiddleware.js";

const wifiRouter = Router()

wifiRouter.post('/wifis', checkAuthentication, validateSchemaMiddleware(schemas.newWifiSchema), controller.registerWifi);
wifiRouter.get('/wifis', checkAuthentication, controller.getAllWifis)
wifiRouter.get('/wifis/:id', checkAuthentication, controller.getOneWifi)
wifiRouter.delete('/wifis/delete/:id', checkAuthentication, controller.deleteOneWifi)

export default wifiRouter