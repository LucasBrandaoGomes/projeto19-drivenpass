import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"

export async function checkAuthentication(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token){
    throw { code: "Unauthorized", message: "Missing token" };
  }

  const data = jwt.verify(token, process.env.JWT_SECRET);

  if(!data){
    throw { code: "Unauthorized", message: "Invalid token" };
  }

  res.locals.data = data;

//   try {
//     const data = jwt.verify(token, process.env.JWT_SECRET);

//     res.locals.data = data;
//   } catch (err) {
//     return res.status(401).send("Invalid token");
//   }

  next();
}