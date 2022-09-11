import joi from "joi";
import { CardBodyData } from "../types/cardTypes";
import { CredentialBodyData } from "../types/credentialTypes";
import { NoteBodyData } from "../types/notesTypes";

const signUpSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
  .string()
  .pattern(/^[0-9]+$/, { name: "password" })
  .min(10)
  .required()
});

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const newCredentialSchema = joi.object<CredentialBodyData>({
    username: joi.string().required(),
    password: joi.string().required(),
    url: joi.string().uri().required(),
    title: joi.string().required()

});

const newNoteSchema = joi.object<NoteBodyData>({
    title: joi.string().max(50).required(),
    text: joi.string().max(1000).required()
});

const newCardSchema = joi.object<CardBodyData>({
    number: joi.string().length(16).required(),
    title: joi.string().required(),
    name: joi.string().required(),
    securityCode: joi.string().length(3).required(),
    expirationDate: joi.string().pattern(/^((0[1-9])|(1[0-2]))\/(\d{4})$/, { name: "expirationDate" }).required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().strict(),
    cardType: joi.string().valid("debit", "credit", "debitAndCredit").required(),
  });

const newWifiSchema = joi.object({
    networkName: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required()
  });
  
export { signUpSchema, signInSchema, newCredentialSchema, newNoteSchema, newCardSchema, newWifiSchema};