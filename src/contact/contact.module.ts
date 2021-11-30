import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

@Module({
  controllers: [ContactController],
  providers: [ContactService, PrismaService],
})
export class ContactModule {}
