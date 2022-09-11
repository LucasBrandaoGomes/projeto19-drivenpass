import { Notes } from "@prisma/client";

export type NoteInsertData = Omit<Notes, 'id'>;

export type NoteBodyData = Omit<NoteInsertData, 'userId'>;

export type NoteResponseData = Omit<Notes, 'userId'>;