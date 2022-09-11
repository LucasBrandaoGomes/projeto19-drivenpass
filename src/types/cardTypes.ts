import { Cards } from "@prisma/client";

export type CardInsertData = Omit<Cards, 'id'>;

export type CardBodyData = Omit<CardInsertData, 'userId'>;

export type CardResponseData = Omit<Cards, 'userId'>;