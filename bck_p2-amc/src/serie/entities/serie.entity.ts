import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('series')
export class SerieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  titulo: string;

  @Column({ length: 5000 })
  sinopsis: string;

  @Column({ length: 100 })
  director: string;

  @Column()
  duracion: number;

  @Column({name: 'fecha_estreno'})
  fechaEstreno: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
