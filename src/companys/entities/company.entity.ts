import { companys } from '@prisma/client';

export class Company implements companys {
  id: number;
  name: string;
  email: string;
  previous_description: string;
  created_at: Date;
  updated_at: Date;
}
