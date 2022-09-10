import { NextFunction, Response, Request } from "express";
import { ObjectSchema } from "joi";

export function validateSchemaMiddleware(schema: ObjectSchema) {
    return (req: Request, res: Response , next: NextFunction) => {
      const body = req.body;
      const { error } = schema.validate(body, { abortEarly: false });
  
      if (error) {
        throw {code: "Invalid", message: error.details.map((e) => e.message )}
      }
  
      res.locals.body = req.body;
  
      next();
    };
  }