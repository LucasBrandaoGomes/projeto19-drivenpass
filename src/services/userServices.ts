import * as userRepository from '../repositories/userRepository.js'
import bcrypt from "bcrypt";
import  jwt  from 'jsonwebtoken';
import { Users } from '@prisma/client';
//import { IUser } from '../types/userTypes.js';

async function checkIfEmailRegistered(email:string) {
    const result = await userRepository.findUserByEmail(email)
    if(result){
        throw { code: "Conflict", message: "Email already registered"}
    }
}

function checkIfUserExists(result: Users) {
    if(result === null){
        throw { code: "NotFound", message: "Invalid Acconout"}
    }
}
function checkPassword(result:Users, password:string){
    const confirmPassword = bcrypt.compareSync(password, result.password);

    if(!confirmPassword){
        throw { code: "Unauthorized", message: "Incorrect email or password"}
    }
}

export async function newUser(email:string, password:string) {
    const passwordCript: string = bcrypt.hashSync(password, 10);
    await checkIfEmailRegistered(email);
    await userRepository.inserNewUser(email, passwordCript )
}

export async function newLogin(email:string, password:string) {
    const secretKey = process.env.JWT_SECRET;
    const result = await userRepository.findUserByEmail(email)
    checkIfUserExists(result)
    checkPassword(result, password)
    const { id } = result
    const token = jwt.sign(String(id), secretKey)
    return token
}