import { Response, Request } from "express";
import * as wifiServices from "../services/wifiServices.js"

export async function registerWifi(req:Request, res:Response) {
    const data = res.locals.body
    const { userId } = res.locals
    await wifiServices.newWifi(Number(userId), data)
    res.sendStatus(201)
}

export async function getAllWifis(req:Request, res:Response) {
    const { userId } = res.locals
    const wifis = await wifiServices.getWifis(Number(userId))
    res.status(200).send(wifis)
}

export async function getOneWifi(req:Request, res:Response) {
    const wifiId  = Number(req.params.id)
    const { userId } = res.locals
    const wifi = await wifiServices.getWifi(userId ,wifiId)
    res.status(200).send(wifi)
}

export async function deleteOneWifi(req:Request, res:Response) {
    const wifiId  = Number(req.params.id)
    const { userId } = res.locals
    await wifiServices.deleteWifi(userId, wifiId)
    res.sendStatus(200)
}