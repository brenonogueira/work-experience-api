import { ApiProperty } from '@nestjs/swagger';
import { Professional } from '../entities/professional.entity';

export class CreateProfessionalDto extends Professional {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  birth_date: Date;

  @ApiProperty()
  occupation_area: string;
}
