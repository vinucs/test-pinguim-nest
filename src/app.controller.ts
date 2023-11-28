import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PinguimService } from './pinguim.service';
import { Pinguim } from './schema/pinguim.schema';
import { PinguimDTO } from './dto/pinguim.dto';

@Controller()
export class AppController {
  constructor(private readonly pinguimService: PinguimService) {}

  @Post()
  createPinguim(@Body() createPinguimDTO:PinguimDTO): Promise<Pinguim> {
    return this.pinguimService.create(createPinguimDTO)
  }

  @Put('/:id')
  updatePinguim(@Param('id') id : string, @Body() updatePinguimDTO:PinguimDTO){
    this.pinguimService.update(id, updatePinguimDTO)
  }

  @Get()
  getAllPinguins(): Promise<Pinguim[]> {
    return this.pinguimService.findAll()
  }

  @Get('/:id')
  getPinguim(@Param('id') id: string): Promise<Pinguim> {
    return this.pinguimService.findOne(id)
  }

  @Delete('/:id')
  deletePinguim(@Param('id') id: string) {
    return this.pinguimService.delete(id)
  }

}
