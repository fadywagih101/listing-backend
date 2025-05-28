import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    @Index()
    name!: string;

  @Column()
    unitNumber!: string;

  @Column()
    project!: string;

  @Column({ nullable: true })
    description!: string;

  @Column({ nullable: true })
    imageUrl!: string;
}
