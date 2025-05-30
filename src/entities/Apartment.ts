import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @Column()
    unitNumber!: string;

  @Column()
    project!: string;

  @Column({ nullable: true })
    price!: string;

  @Column({ nullable: true })
    space!: string;

  @Column({ nullable: true })
    address!: string;

  @Column({ nullable: true })
    description!: string;

  @Column({ nullable: true })
    imageUrl!: string;
}
