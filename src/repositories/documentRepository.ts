import { prisma } from "../database/database.js";
import { Documents } from "@prisma/client";
import { DocumentInsertData } from "../types/docTypes.js";

export async function findUserDocument(userId:number, type: any): Promise<Documents | null>{
    return await prisma.documents.findUnique({
        where: {
          type_userId: {
            type,
            userId,
          },
        },
      });
    }

export async function insert(data: DocumentInsertData){
    await prisma.documents.create({data});
}

export async function findDocuments(userId: number): Promise< Documents[] | null >{
    return await prisma.documents.findMany({where : {userId:userId}});
}

export async function findDocument(userId:number, documentId:number): Promise<Documents | null>{
    return await prisma.documents.findFirst({where: { userId:userId,  AND:  { id: documentId }}});
}

export async function deleteDocumentById(documentId: number) {
    await prisma.documents.delete({ where: { id: documentId } });
}