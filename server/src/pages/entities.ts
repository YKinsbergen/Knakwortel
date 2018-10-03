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

    @Column('text', {nullable:false})
    body: string

    @Column()
    locale: string

    @Column()
    order: number

    //ManyToOne page // pageid ??

    @Column() // O.a. nodig om te 
    iFrameUrl: string

    @Column() // Is dit een relation??? Ja OneToOne
    slug: string

}

export class PageTitle extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable:false})
    locale: string

    @Column('text', {nullable:false})
    content: string

    // @OneToOne ()
    // pageId: 

}


// Leuk voor later
// export class Slug extends BaseEntity {

//     @PrimaryGeneratedColumn()
//     id?: number

//     @Column('text', {nullable:false})
//     locale: string

//     @Column('text', {nullable:false})
//     title: string

//     @Column()
//     content: string

//     pageId: 
// }