import * as credentialRepository from '../repositories/credentialRepository.js'
import Cryptr from "cryptr";
import { Credentials } from '@prisma/client';
import jwt from "jsonwebtoken";

function checkIfCredentialExistis(result: Credentials){
    if(result){
        throw { code: "Conflict", message: "User already registered this credential title"}
    }
}

function cryptPassword(password: string){
    const cryptr = new Cryptr(process.env.CRYPTR);
    const passwordEncrypted = cryptr.encrypt(password);
    return passwordEncrypted;
}

function checkCredentialById(result:Credentials){
    if(result === null){
        throw { code: "Conflict", message: "This credential does not belong you"}
    }
}

export async function newCredential(userId: number, data: Credentials ) {
    const result = await credentialRepository.findUserCredential(userId, data.title)
    checkIfCredentialExistis(result)
    const passwordEncrypted = cryptPassword(result.password)
    const dataSend = {...data, password:passwordEncrypted, userId}
    return dataSend
}

export async function getCredentials(userId:number) {
    return await credentialRepository.findCredentials(userId)
}

export async function getCredential(userId:number, credentialId:number) {
    const result = await credentialRepository.findCredential(userId, credentialId)
    checkCredentialById(result)
    return result;
}

export async function deleteCredential(userId: number, credentialId:number) {
    const result = await credentialRepository.findCredential(userId, credentialId)
    checkCredentialById(result)
    return await credentialRepository.deleteCredentialById(credentialId)
}
