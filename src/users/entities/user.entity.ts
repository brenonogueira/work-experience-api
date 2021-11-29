import { users } from '@prisma/client';

export class User implements users {
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  id: number;
}
