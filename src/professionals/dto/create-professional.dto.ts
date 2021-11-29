import { Professional } from '../entities/professional.entity';

export class CreateProfessionalDto extends Professional {
  name: string;
  email: string;
  birth_date: Date;
  occupation_area: string;
}
