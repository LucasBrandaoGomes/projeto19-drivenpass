import { Users } from "@prisma/client";

export type IUser = Omit<Users, "id">

