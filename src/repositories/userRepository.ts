import { prisma } from "../database/database.js";
import { IUser } from "../types/userTypes.js";

export async function findUserByEmail(email:string) {
   return await prisma.users.findUnique({where: {email:email}})
}

export async function inserNewUser(email:string, password: string) {
    await prisma.users.create({data: {email, password}})
}