
import { Credentials } from '@prisma/client';

export type CredentialInsertData = Omit<Credentials, 'id'>;

export type CredentialBodyData = Omit<CredentialInsertData, 'userId'>;

export type CredentialResponseData = Omit<Credentials, 'userId'>;