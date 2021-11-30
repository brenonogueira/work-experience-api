import { ApiProperty } from '@nestjs/swagger';
import { Contact } from '../entities/contact.entity';

export class CreateContactDto extends Contact {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  message: string;
}
