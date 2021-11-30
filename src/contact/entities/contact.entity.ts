import { contact } from '@prisma/client';

export class Contact implements contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: Date;
  updated_at: Date;
}
