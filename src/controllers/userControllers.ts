import {Request, Response} from "express"
import * as userServices from "../services/userServices.js"

export async function signUp(req:Request, res: Response) {
    const {email, password} = res.locals.body

    await userServices.newUser(email, password)
    res.sendStatus(201)
}

export async function signIn(req:Request, res: Response) {
    const {email, password} = res.locals.body
    const token = await userServices.newLogin(email, password)
    
    res.status(200).send(token)
}