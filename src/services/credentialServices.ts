import * as credentialRepository from '../repositories/credentialRepository.js'
import { Credentials } from '@prisma/client';
import { crypt, decrypt } from './utils/cryptDecrypt.js';
import { checkResult } from './utils/checkResult.js';

function checkIfCredentialExistis(result: Credentials){
    if(result){
        throw { code: "Conflict", message: "User already registered this credential title"}
    }
}

export async function newCredential(userId: number, data: Credentials ) {
    const result = await credentialRepository.findUserCredential(Number(userId), data.title)
    checkIfCredentialExistis(result)
    const passwordEncrypted = crypt(data.password)
    const dataSend = {...data, password:passwordEncrypted, userId}
    await credentialRepository.insert(dataSend)
}

export async function getCredentials(userId:number) {
    const result = await credentialRepository.findCredentials(Number(userId))
    if(result.length>0){
        result.map(iten => iten.password = decrypt(iten.password))
        return result
    }
    return result
}

export async function getCredential(userId:number, credentialId:number) {
    const result = await credentialRepository.findCredential(Number(userId), Number(credentialId))
    checkResult(result)
    result.password = decrypt(result.password)
    
    return result   
}

export async function deleteCredential(userId: number, credentialId:number) {
    const result = await credentialRepository.findCredential(Number(userId), Number(credentialId))
    checkResult(result)
    return await credentialRepository.deleteCredentialById(credentialId)
}
