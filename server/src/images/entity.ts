// src/advertisements/entity.ts
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Image extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false})
    url: string

    @Column('text', {nullable:false})
    altText: string

}