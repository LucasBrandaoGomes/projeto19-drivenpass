import * as notesRepository from '../repositories/notesRepository.js'
import { Notes } from '@prisma/client';
import { NoteInsertData } from '../types/notesTypes.js';

async function checkIfNoteExistis(userId: number, title:string): Promise<void>{
    const result: Notes | null = await notesRepository.findUserNote(userId, title)

    if(result){
        throw { code: "Conflict", message: "User already registered this note title"}
    }
}

function checkNoteById(result:Notes){
    if(result === null){
        throw { code: "Conflict", message: "Cannot find this note"}
    }
}

export async function newNote({userId, title, text}: NoteInsertData){
    await checkIfNoteExistis(Number(userId), title)
    //const dataSend : NoteInsertData = {userId, title, text}
    //console.log(dataSend)
    await notesRepository.insert(title, text, Number(userId))
}

export async function getNotes(userId:number) {
    return await notesRepository.findNotes(Number(userId))
}

export async function getNote(userId:number, credentialId:number) {
    const result = await notesRepository.findNote(Number(userId), Number(credentialId))
    checkNoteById(result)
    return result;
}

export async function deleteNote(userId: number, noteId:number) {
    const result = await notesRepository.findNote(Number(userId), Number(noteId))
    checkNoteById(result)
    return await notesRepository.deleteNoteById(noteId)
}
