import * as credentialRepository from '../repositories/credentialRepository.js'
import Cryptr from "cryptr";
import { Credentials } from '@prisma/client';
import jwt from "jsonwebtoken";
import internal from 'stream';

function checkIfCredentialExistis(result: Credentials){
    if(result){
        throw { code: "Conflict", message: "User already registered this credential title"}
    }
}

function cryptPassword(password: string){
    const cryptr = new Cryptr(process.env.CRYPTR || "secret");
    const passwordEncrypted = cryptr.encrypt(password);
    return passwordEncrypted;
}

function decryptPassword(password: string){
    const cryptr = new Cryptr(process.env.CRYPTR || "secret");
    const decryptedSecurityPassword: string = cryptr.decrypt(password);
    return decryptedSecurityPassword;
}


function checkCredentialById(result:Credentials){
    if(result === null){
        throw { code: "Conflict", message: "Cannot find the credential"}
    }
}

export async function newCredential(userId: number, data: Credentials ) {
    const result = await credentialRepository.findUserCredential(Number(userId), data.title)
    checkIfCredentialExistis(result)
    const passwordEncrypted = cryptPassword(data.password)
    const dataSend = {...data, password:passwordEncrypted, userId}
    await credentialRepository.insert(dataSend)
}

export async function getCredentials(userId:number) {
    const result = await credentialRepository.findCredentials(Number(userId))
    if(result.length>0){
        result.map(iten => iten.password = decryptPassword(iten.password))
        return result
    }
    return result
}

export async function getCredential(userId:number, credentialId:number) {
    const result = await credentialRepository.findCredential(Number(userId), Number(credentialId))
    checkCredentialById(result)
    const decrypted = decryptPassword(result.password)
    const resultSend = {...result, password:decrypted}
    
    return resultSend   
}

export async function deleteCredential(userId: number, credentialId:number) {
    const result = await credentialRepository.findCredential(Number(userId), Number(credentialId))
    console.log(result)
    checkCredentialById(result)
    return await credentialRepository.deleteCredentialById(credentialId)
}
