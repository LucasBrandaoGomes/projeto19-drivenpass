import * as wifiRepository from "../repositories/wifiRepository.js"
import { Wifis } from '@prisma/client';
import { WifiBodyData } from '../types/wifiTypes.js';
import { crypt, decrypt } from './utils/cryptDecrypt.js';
import { checkResult } from "./utils/checkResult.js";

async function checkIfWifiExistis(userId: number, title:string): Promise<void>{
    const result: Wifis | null = await wifiRepository.findUserWifi(userId, title)

    if(result){
        throw { code: "Conflict", message: "User already registered this card title"}
    }
}

export async function newWifi(userId: number, data: WifiBodyData ) {
    await checkIfWifiExistis(userId, data.title)
    const passwordEncrypted = crypt(data.password)
    const dataSend = {...data, password:passwordEncrypted, userId}
    await wifiRepository.insert(dataSend)
}

export async function getWifis(userId:number) {
    const result = await wifiRepository.findWifis(Number(userId))
    if(result.length>0){
        result.map(iten => iten.password = decrypt(iten.password))
        return result
    }
    return result
}

export async function getWifi(userId:number, wifiId:number) {
    const result = await wifiRepository.findWifi(Number(userId), Number(wifiId))
    checkResult(result)
    result.password = decrypt(result.password)
    return result   
}

export async function deleteWifi(userId: number, wifiId:number) {
    const result = await wifiRepository.findWifi(Number(userId), Number(wifiId))
    checkResult(result)
    return await wifiRepository.deleteWifiById(wifiId)
}