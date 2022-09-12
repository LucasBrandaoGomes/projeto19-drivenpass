import { Response, Request } from "express";
import * as documentServices from "../services/documentServices.js"

export async function registerDocument(req:Request, res:Response) {
    const data = res.locals.body
    const { userId } = res.locals
    await documentServices.newDocument(Number(userId), data)
    res.sendStatus(201)
}

export async function getAllDocuments(req:Request, res:Response) {
    const { userId } = res.locals
    const documents = await documentServices.getDocuments(Number(userId))
    res.status(200).send(documents)
}

export async function getOneDocument(req:Request, res:Response) {
    const documentId  = Number(req.params.id)
    const { userId } = res.locals
    const document = await documentServices.getDocument(userId ,documentId)
    res.status(200).send(document)
}

export async function deleteOneDocument(req:Request, res:Response) {
    const documentId  = Number(req.params.id)
    const { userId } = res.locals
    await documentServices.deleteDocument(userId, documentId)
    res.sendStatus(200)
}