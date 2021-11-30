import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
// import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prismService: PrismaService) {}

  async create(data: CreateContactDto) {
    return await this.prismService.contact.create({ data });
  }

  async findAll() {
    return await this.prismService.contact.findMany();
  }

  async findOne(id: number) {
    return await this.prismService.contact.findUnique({
      where: { id },
    });
  }

  // update(id: number, data: UpdateContactDto) {
  //   return `This action updates a #${id} contact`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} contact`;
  // }
}
