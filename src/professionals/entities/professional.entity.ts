import { professionals } from '@prisma/client';

export class Professional implements professionals {
  id: number;
  email: string;
  name: string;
  birth_date: Date;
  occupation_area: string;
  created_at: Date;
  updated_at: Date;
}
