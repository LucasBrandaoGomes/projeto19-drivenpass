import { Wifis } from "@prisma/client";

export type WifiInsertData = Omit<Wifis, 'id'>;

export type WifiBodyData = Omit<WifiInsertData, 'userId'>;

export type WifiResponseData = Omit<Wifis, 'userId'>;