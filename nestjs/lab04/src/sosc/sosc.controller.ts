import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoscService } from './sosc.service';
import { CreateSoscDto } from './dto/create-sosc.dto';
import { UpdateSoscDto } from './dto/update-sosc.dto';

@Controller('sosc')
export class SoscController {
  constructor(private readonly soscService: SoscService) {}

  @Post()
  create(@Body() createSoscDto: CreateSoscDto) {
    return this.soscService.create(createSoscDto);
  }

  @Get()
  findAll() {
    return this.soscService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soscService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoscDto: UpdateSoscDto) {
    return this.soscService.update(+id, updateSoscDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soscService.remove(+id);
  }
}
