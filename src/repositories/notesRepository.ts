import { prisma } from "../database/database.js";
import { NoteInsertData } from "../types/notesTypes.js";
import { Notes } from "@prisma/client";

export async function findUserNote(userId:number, title: string): Promise<Notes | null>{
    return await prisma.notes.findUnique({
        where: {
          title_userId: {
            title,
            userId,
          },
        },
      });
    }

export async function insert(title: string, text:string, userId:number ): Promise<void>{
    await prisma.notes.create({ data:{ title, text, userId} });
}

export async function findNotes(userId: number): Promise< Notes[] | null >{
    return await prisma.notes.findMany({where : {userId:userId}});
}

export async function findNote(userId:number, noteId:number): Promise<Notes | null>{
    return await prisma.notes.findFirst({where: { userId:userId,  AND:  { id: noteId }}});
}

export async function deleteNoteById(noteId: number) {
    await prisma.notes.delete({ where: { id: noteId } });
  }