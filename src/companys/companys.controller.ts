import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CompanysService } from './companys.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Companies')
@Controller('v1/companies')
export class CompanysController {
  constructor(private readonly companysService: CompanysService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companysService.create(createCompanyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.companysService.findAll();
  }

  @Get('total')
  CountCompany() {
    return this.companysService.CountCompanies();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companysService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companysService.update(+id, updateCompanyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companysService.remove(+id);
  }
}
