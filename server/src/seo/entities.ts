//seotags & seo attributes
// src/seo/entities.ts

import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class SeoTag extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false}) // meta, link, script...
    type: string

    @Column('text', {nullable: true}) // for script-tags
    content: string

    @Column()
    locale: string
    
    @Column()
    pageId: number
}

export class SeoTagAttribute extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    seoTagId: number

    @Column('text', {nullable:false}) 
    type: string

    @Column('text', {nullable:false}) 
    value: string

    @Column()
    locale: string

}
