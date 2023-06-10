import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateSerieDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo titulo no debe ser vacío' })
    @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
    @MaxLength(250, { message: 'El campo titulo no debe ser mayor a 100 caracteres' })
    readonly titulo: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
    @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
    @MaxLength(5000, { message: 'El campo sinopsis no debe ser mayor a 30 caracteres' })
    readonly sinopsis: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo director no debe ser vacío' })
    @IsString({ message: 'El campo director debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo director no debe ser mayor a 30 caracteres' })
    readonly director: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo duracion no debe ser vacío' })
    @IsNumber({},{ message: 'El campo duracion debe ser de tipo cadena' })
    readonly duracion: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo fechaEstreno debe estar definido' })
    @IsDateString({}, { message: 'El campo fechaEstreno debe ser de tipo fecha' })
    readonly fechaEstreno: Date;
}
