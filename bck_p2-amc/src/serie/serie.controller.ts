import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieEntity } from './entities/serie.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('series')
@Controller('series')
export class SerieController {
  constructor(private readonly serieService: SerieService) { }

  @Post()
  @ApiCreatedResponse({ type: SerieEntity })
  @ApiOperation({ summary: 'Crea un nuevo serie' })
  create(@Body() createSerieDto: CreateSerieDto) {
    return this.serieService.create(createSerieDto);
  }

  @Get()
  @ApiOkResponse({ type: SerieEntity, isArray: true })
  @ApiOperation({ summary: 'Obtiene la lista de series' })
  findAll() {
    return this.serieService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SerieEntity })
  @ApiOperation({ summary: 'Obtiene un serie con base al identificador' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.serieService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SerieEntity })
  @ApiOperation({ summary: 'Actualiza los datos de un serie con base al identificador' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSerieDto: UpdateSerieDto,
  ) {
    return this.serieService.update(id, updateSerieDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiOperation({ summary: 'Elimina un serie con base al identificador' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.serieService.remove(id);
  }
}
