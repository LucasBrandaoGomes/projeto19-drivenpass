import { Response, Request } from "express";
import * as cardServices from "../services/cardServices.js"

export async function registerCard(req:Request, res:Response) {
    const data = res.locals.body
    const { userId } = res.locals
    await cardServices.newCard(Number(userId), data)
    res.sendStatus(201)
}

export async function getAllCards(req:Request, res:Response) {
    const { userId } = res.locals
    const cards = await cardServices.getCards(Number(userId))
    res.status(200).send(cards)
}

export async function getOneCard(req:Request, res:Response) {
    const cardId  = Number(req.params.id)
    const { userId } = res.locals
    const card = await cardServices.getCard(userId ,cardId)
    res.status(200).send(card)
}

export async function deleteOneCard(req:Request, res:Response) {
    const cardId  = Number(req.params.id)
    const { userId } = res.locals
    await cardServices.deleteCard(userId, cardId)
    res.sendStatus(200)
}