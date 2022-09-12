import * as documentRepository from '../repositories/documentRepository.js'
import { Documents } from '@prisma/client';
import { checkResult } from './utils/checkResult.js';
import { DocumentBodyData } from '../types/docTypes.js';

async function checkIfCardExistis(userId: number, type:any): Promise<void>{
    const result: Documents | null = await documentRepository.findUserDocument(userId, type)

    if(result){
        throw { code: "Conflict", message: `User already registered ${type}`}
    }
}

export async function newDocument(userId: number, data: DocumentBodyData ) {
    await checkIfCardExistis(userId, data.type)
    const dataSend = {...data, userId}
    await documentRepository.insert(dataSend)
}

export async function getDocuments(userId:number) {
    return await documentRepository.findDocuments(Number(userId))
}

export async function getDocument(userId:number, documentId:number) {
    const result = await documentRepository.findDocument(Number(userId), Number(documentId))
    checkResult(result)
    return result;
}

export async function deleteDocument(userId: number, documentId:number) {
    const result = await documentRepository.findDocument(Number(userId), Number(documentId))
    checkResult(result)
    return await documentRepository.deleteDocumentById(documentId)
}