import {Request, Response} from "express"
import * as noteServices from "../services/notesServices.js"

export async function createNote(req:Request, res: Response) {
    const {title, text} = res.locals.body
    const { userId } = res.locals
    await noteServices.newNote({userId, title, text})
    res.sendStatus(201)
}

export async function getAllNotes(req:Request, res: Response) {
    const { userId } = res.locals
    const notes = await noteServices.getNotes(userId)
    res.status(200).send(notes)
}

export async function getOneNote(req:Request, res: Response) {
    const noteId  = Number(req.params.id)
    const { userId } = res.locals
    const note = await noteServices.getNote(userId , noteId)
    res.status(200).send(note)
}

export async function deleteOneNote(req:Request, res: Response) {
    const noteId  = Number(req.params.id)
    const { userId } = res.locals
    await noteServices.deleteNote(Number(userId), Number(noteId))
    res.sendStatus(200)
}