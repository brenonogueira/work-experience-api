import { ApiProperty } from '@nestjs/swagger';
import { Company } from '../entities/company.entity';

export class CreateCompanyDto extends Company {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  previous_description: string;
}
