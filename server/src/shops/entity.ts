import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Shop extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable: false})
  storeName: string

  @Column('text', {nullable: false})
  address: string

  @Column('text', {nullable: false})
  city: string

  @Column('text', {nullable: false})
  postcode: string

  @Column('double precision', {nullable: true})
  latitude: number

  @Column('double precision', {nullable: true})
  longitude: number

  @Column('text', {nullable: false})
  mapUrl: string


}