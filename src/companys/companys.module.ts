import { Module } from '@nestjs/common';
import { CompanysService } from './companys.service';
import { CompanysController } from './companys.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CompanysController],
  providers: [CompanysService, PrismaService],
})
export class CompanysModule {}
