import { prisma } from "../database/database.js";
import { Wifis } from "@prisma/client";
import { WifiInsertData } from "../types/wifiTypes.js";

export async function findUserWifi(userId:number, title: string): Promise< Wifis | null>{
    return await prisma.wifis.findUnique({
        where: {
          title_userId: {
            title,
            userId,
          },
        },
      });
}

export async function insert(data: WifiInsertData){
    await prisma.wifis.create({data});
}

export async function findWifis(userId: number): Promise< Wifis[] | null >{
    return await prisma.wifis.findMany({where : {userId:userId}});
}

export async function findWifi(userId:number, wifiId:number): Promise< Wifis | null>{
    return await prisma.wifis.findFirst({where: { userId:userId,  AND:  { id: wifiId }}});
}
  
export async function deleteWifiById(wifiId: number) {
      await prisma.wifis.delete({ where: { id: wifiId } });
}
