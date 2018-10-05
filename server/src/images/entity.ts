// src/advertisements/entity.ts
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {PageContent} from '../pages/entities'

@Entity()
export default class Image extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false})
    url: string

    @Column('text', {nullable:true})
    altText: string

    @OneToMany(_ => PageContent, pageContent => pageContent.image)
    pageContents: PageContent[]

}