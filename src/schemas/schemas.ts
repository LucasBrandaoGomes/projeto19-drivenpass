import joi from "joi";

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

const newCredentialSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    url: joi.string().uri().required(),
    title: joi.string().required()

});

const newNoteSchema = joi.object({
    title: joi.string().max(50).required(),
    text: joi.string().max(1000).required()
});

const newCardSchema = joi.object({
    number: joi.string().length(16).required(),
    title: joi.string().required(),
    name: joi.string().required(),
    securityCode: joi.string().length(3).required(),
    expirationDate: joi.string().required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().valid("true", "false"),
    type: joi.string().valid("debit", "credit", "debitAndCredit").required(),
    employeeId: joi.number().integer().greater(0).required(),
  });

const newWifiSchema = joi.object({
    networkName: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required()
  });
  
export { signUpSchema, signInSchema, newCredentialSchema, newNoteSchema, newCardSchema, newWifiSchema};