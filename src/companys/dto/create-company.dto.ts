import { Company } from '../entities/company.entity';

export class CreateCompanyDto extends Company {
  name: string;
  email: string;
  previous_description: string;
}
