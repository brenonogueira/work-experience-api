import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';

@Injectable()
export class ProfessionalsService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateProfessionalDto) {
    return await this.prismaService.professionals.create({ data });
  }

  async findAll() {
    return await this.prismaService.professionals.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.professionals.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateProfessionalDto) {
    return await this.prismaService.professionals.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prismaService.professionals.delete({
      where: { id },
    });
  }
}
