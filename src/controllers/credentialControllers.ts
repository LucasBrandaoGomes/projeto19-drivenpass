import {Request, Response} from "express"
import * as credentialServices from "../services/credentialServices.js"

export async function createCredential(req:Request, res: Response) {
    const data = res.locals.body
    const { userId } = res.locals
    await credentialServices.newCredential(userId, data)
    res.sendStatus(201)
}

export async function getAllCredentials(req:Request, res: Response) {
    const { userId } = res.locals
    const credentials = await credentialServices.getCredentials(userId)
    res.status(200).send(credentials)
}

export async function getOneCredential(req:Request, res: Response) {
    const credentialId  = Number(req.params.id)
    const { userId } = res.locals
    const credential = await credentialServices.getCredential(userId ,credentialId)
    res.status(200).send(credential)
}

export async function deleteOneCredential(req:Request, res: Response) {
    const credentialId  = Number(req.params.id)
    const { data } = res.locals
    const userId = data.data
    await credentialServices.deleteCredential(userId, credentialId)
    res.sendStatus(200)
}