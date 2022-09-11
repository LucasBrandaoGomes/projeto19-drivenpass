import * as notesRepository from '../repositories/notesRepository.js'
import { Notes } from '@prisma/client';
import { NoteInsertData } from '../types/notesTypes.js';
import { checkResult } from './utils/checkResult.js';

async function checkIfNoteExistis(userId: number, title:string): Promise<void>{
    const result: Notes | null = await notesRepository.findUserNote(userId, title)

    if(result){
        throw { code: "Conflict", message: "User already registered this note title"}
    }
}

export async function newNote({userId, title, text}: NoteInsertData){
    await checkIfNoteExistis(Number(userId), title)
    await notesRepository.insert(title, text, Number(userId))
}

export async function getNotes(userId:number) {
    return await notesRepository.findNotes(Number(userId))
}

export async function getNote(userId:number, credentialId:number) {
    const result = await notesRepository.findNote(Number(userId), Number(credentialId))
    checkResult(result)
    return result;
}

export async function deleteNote(userId: number, noteId:number) {
    const result = await notesRepository.findNote(Number(userId), Number(noteId))
    checkResult(result)
    return await notesRepository.deleteNoteById(noteId)
}
