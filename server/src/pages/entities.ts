// pages, pagecontent, pagetitles, slugs

// src/pages/entities.ts
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Image from '../images/entity'


@Entity()
export class PageTitle extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable: false})
    locale: string

    @Column('text', {nullable: false})
    content: string

    // @OneToOne(_ => Page)
    // page: Page
}


@Entity()
export class Page extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @Column('timestamptz', {nullable:true})
    published_at: Timestamp

    @Column('timestamptz', {nullable:true})
    unpublished_at: Timestamp

    @OneToOne(_ => PageTitle)
    @JoinColumn()
    pageTitle: PageTitle

    @OneToMany(_ => PageContent, pageContent => pageContent.page)
    pageContents: PageContent[]

}


@Entity()
export class PageContent extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable: true})
    tag: string

    @Column('text', {nullable: false})
    headline: string

    @Column('text', {nullable: false})
    body: string

    @Column('text', {nullable: false, default: 'NL'})
    locale: string

    @Column('integer', {nullable: true})
    order: number

    @Column('text', {nullable: true})
    iframeUrl: string

    @ManyToOne(_ => Image, image => image.pageContents)
    image: Image

    @ManyToOne(_ => Page, page => page.pageContents)
    page: Page

}

// @Entity()
// export class Slug extends BaseEntity {

//     @PrimaryGeneratedColumn()
//     id?:number

//     @Column('text', {nullable: false})
//     locale: string

//     @Column('text', {nullable: false})
//     slug: string

//     @OneToOne(_ => Page)
//     @JoinColumn()
//     page: Page
// }
