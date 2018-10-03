// pages, pagecontent, pagetitles, slugs

// src/pages/entities.ts
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Page extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id?: number

    @Column('timestamp', {nullable:false})
    publishedAt: Date

    @Column('timestamp')
    unpublishedAt: Date

    //pagetitle relation
}

export class PageContent extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false})
    title: string
}
