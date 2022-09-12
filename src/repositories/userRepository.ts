import { prisma } from "../database/database.js";
import { Users } from "@prisma/client";

export async function findUserByEmail(email:string): Promise < Users | null> {
   return await prisma.users.findUnique({where: {email:email}})
}

export async function inserNewUser(email:string, password: string) {
    await prisma.users.create({data: {email, password}})
}