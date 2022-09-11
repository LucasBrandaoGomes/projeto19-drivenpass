import Cryptr from "cryptr";

function crypt(information: string){
    const cryptr = new Cryptr(process.env.CRYPTR || "secret");
    const informationEncrypted = cryptr.encrypt(information);
    return informationEncrypted;
}

function decrypt(information: string){
    const cryptr = new Cryptr(process.env.CRYPTR || "secret");
    const decryptedSecurityinformation: string = cryptr.decrypt(information);
    return decryptedSecurityinformation;
}

export {crypt, decrypt }