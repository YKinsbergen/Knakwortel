//seotags & seo attributes

// src/advertisements/entity.ts
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Placeholder extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false})
    title: string
}