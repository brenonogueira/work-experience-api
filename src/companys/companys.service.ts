import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanysService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateCompanyDto) {
    return await this.prismaService.companys.create({ data });
  }

  async findAll() {
    return await this.prismaService.companys.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.companys.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCompanyDto) {
    return await this.prismaService.companys.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prismaService.companys.delete({
      where: { id },
    });
  }
}
