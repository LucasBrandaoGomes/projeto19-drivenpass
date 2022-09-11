import * as cardRepository from "../repositories/cardRepository.js"
import { Cards } from '@prisma/client';
import { CardBodyData, CardInsertData } from '../types/cardTypes.js';
import { crypt, decrypt } from './utils/cryptDecrypt.js';
import { checkResult } from "./utils/checkResult.js";

async function checkIfCardExistis(userId: number, title:string): Promise<void>{
    const result: Cards | null = await cardRepository.findUserCard(userId, title)

    if(result){
        throw { code: "Conflict", message: "User already registered this card title"}
    }
}

export async function newCard(userId: number, data: CardBodyData ) {
    await checkIfCardExistis(userId, data.title)
    const passwordEncrypted = crypt(data.password)
    const securityCodeEncrypted = crypt(data.securityCode)
    const dataSend = {...data, password:passwordEncrypted, securityCode:securityCodeEncrypted, userId}
    await cardRepository.insert(dataSend)
}

export async function getCards(userId:number) {
    const result = await cardRepository.findCards(Number(userId))
    if(result.length>0){
        result.map(iten => {iten.password = decrypt(iten.password);iten.securityCode = decrypt(iten.securityCode)})
        return result
    }
    return result
}

export async function getCard(userId:number, cardId:number) {
    const result = await cardRepository.findCard(Number(userId), Number(cardId))
    checkResult(result)
    result.password = decrypt(result.password)
    result.securityCode = decrypt(result.securityCode)
    return result   
}

export async function deleteCard(userId: number, cardId:number) {
    const result = await cardRepository.findCard(Number(userId), Number(cardId))
    checkResult(result)
    return await cardRepository.deleteCardById(cardId)
}