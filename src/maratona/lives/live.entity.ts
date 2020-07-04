import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Live {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  participants: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  url: string;
}
