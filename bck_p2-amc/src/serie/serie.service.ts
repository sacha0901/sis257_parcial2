import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SerieEntity } from './entities/serie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(SerieEntity)
    private serieRepository: Repository<SerieEntity>,
  ) {}

  async create(
    createSerieDto: CreateSerieDto,
  ): Promise<SerieEntity> {
    const existe = await this.serieRepository.findOneBy({
      titulo: createSerieDto.titulo.trim(),
      
    });

    if (existe) {
      throw new ConflictException(`La serie ${createSerieDto.titulo} ya existe.`);
    }

    return this.serieRepository.save({
      titulo: createSerieDto.titulo.trim(),
      sinopsis: createSerieDto.sinopsis.trim(),
      director: createSerieDto.director.trim(),
      duracion: createSerieDto.duracion,
      fechaEstreno: createSerieDto.fechaEstreno,
    });
  }

  async findAll(): Promise<SerieEntity[]> {
    return this.serieRepository.find();
  }

  async findOne(id: number): Promise<SerieEntity> {
    const serie = await this.serieRepository.findOneBy({id});

    if (!serie) {
      throw new NotFoundException(`La serie ${id} no existe.`);
    }

    return serie;
  }

  async update(id: number, updateSerieDto: UpdateSerieDto) {
    const serie = await this.serieRepository.findOneBy({id});

    if (!serie) {
      throw new NotFoundException(`La serie ${id} no existe.`);
    }

    const serieUpdate = Object.assign(serie, updateSerieDto);
    return this.serieRepository.save(serieUpdate);
  }

  async remove(id: number) {
    const existe = await this.serieRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`La serie ${id} no existe.`);
    }

    return this.serieRepository.delete(id);
  }
}
