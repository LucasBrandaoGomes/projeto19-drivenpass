import { prisma } from "../database/database.js";
import { CredentialInsertData } from "../types/credentialTypes.js";
import { Credentials } from "@prisma/client";

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
    await prisma.credentials.create({data});
}

export async function findCredentials(userId: number){
    return await prisma.credentials.findMany({where : {userId:userId}});
}

export async function findCredential(userId:number, credentialId:number): Promise< Credentials | null>{
  return await prisma.credentials.findFirst({where: { userId:userId,  AND:  { id: credentialId }}});
}

export async function deleteCredentialById(credentialId: number) {
    await prisma.credentials.delete({ where: { id: credentialId } });
}