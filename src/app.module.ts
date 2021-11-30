import { ProfessionalsModule } from './professionals/professionals.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanysModule } from './companys/companys.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [UsersModule, ProfessionalsModule, CompanysModule, AuthModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
