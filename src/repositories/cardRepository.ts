import { prisma } from "../database/database.js";
import { Cards } from "@prisma/client";
import { CardInsertData } from "../types/cardTypes.js";

export async function findUserCard(userId:number, title: string): Promise< Cards | null>{
    return await prisma.cards.findUnique({
        where: {
          title_userId: {
            title,
            userId,
          },
        },
      });
}

export async function insert(data: CardInsertData){
    await prisma.cards.create({data});
}

export async function findCards(userId: number): Promise< Cards[] | null >{
    return await prisma.cards.findMany({where : {userId:userId}});
}

export async function findCard(userId:number, cardId:number): Promise< Cards | null>{
    return await prisma.cards.findFirst({where: { userId:userId,  AND:  { id: cardId }}});
}
  
export async function deleteCardById(cardId: number) {
      await prisma.cards.delete({ where: { id: cardId } });
}
