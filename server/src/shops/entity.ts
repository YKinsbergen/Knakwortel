import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Shop extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable: false})
  name: string

  @Column('text', {nullable: false})
  address: string

  @Column('text', {nullable: false})
  zipcode: string

  @Column('double precision', {nullable: true})
  latitude: number

  @Column('double precision', {nullable: true})
  longitude: number


}