import { Documents } from "@prisma/client";

export type DocumentInsertData = Omit<Documents, 'id'>;

export type DocumentBodyData = Omit<DocumentInsertData, 'userId'>;

export type DocumentResponseData = Omit<Documents, 'userId'>;