import { prisma } from "../database/database.js";
import { CredentialInsertData } from "../types/credentialTypes.js";

export async function findUserCredential(userId:number, title: string){
    return await prisma.credentials.findUnique({
        where: {
          userId_title: {
            userId,
            title,
          },
        },
      });
    }

export async function insert(data: CredentialInsertData){
    await prisma.credentials.create({ data });
}

export async function findCredentials(userId: number){
    return await prisma.credentials.findMany({where : {userId:userId}});
}

export async function findCredential(userId:number, credentialId:number){
    return await prisma.credentials.findFirst({where: { userId:userId,  AND:  { id: credentialId }}});
}

export async function deleteCredentialById(credentialId: number) {
    await prisma.credentials.delete({ where: { id: credentialId } });
  }