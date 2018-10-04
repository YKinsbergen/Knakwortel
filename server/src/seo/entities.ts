//seotags & seo attributes
// src/seo/entities.ts

import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

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

    @OneToMany(_ => SeoTagAttribute, SeoTagAttribute => SeoTagAttribute.seoTag)
    SeoTagAttributes: SeoTagAttribute[]
}

export class SeoTagAttribute extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false}) 
    type: string

    @Column('text', {nullable:false}) 
    value: string

    @Column()
    locale: string

    @ManyToOne(_ => SeoTag, seoTag => seoTag.SeoTagAttributes)
    seoTag: SeoTag

}
