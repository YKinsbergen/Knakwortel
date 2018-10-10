// src/advertisements/controller.ts
import { JsonController, Post, Get, Body, Param, BadRequestError, QueryParam, Put, NotFoundError, HttpCode,BodyParam, Authorized} from "routing-controllers";
import {Page, PageContent} from './entities'
import Image from '../images/entity'

@JsonController()
export class PagesController {
    @Get('/pages/:id')
    async onePage (
        @Param('id') id: number
    ) {
        const page = await Page.findOne(id, {relations: ['pageTitle']})
        const pageContents = await PageContent.find({where: {page}, order: {order: 'ASC'}, relations: ['image']})

        if (page) page.pageContents = pageContents
        return page
    }

    @Authorized()
    @Post('/contents')
    async addContentBlock(
        @BodyParam('headline') headline: string,
        @BodyParam('body') body: string,
        @QueryParam('tag') tag: string
    ) {
        console.log('***********', headline)
        const page = await Page.findOne(1)
        const order = 1
        const block = await PageContent.create({headline, body, tag, page, order})

        return block.save()
    }

    @Get('/contents')
    async allContentBlocks(
        @QueryParam('page') page: number,
        @QueryParam('orderBy') orderBy: string,
        @QueryParam('direction') direction: string
    ) {

        const count = await PageContent.count({relations: ['page', 'page.pageTitle']})

        if (!page) page = 1
        const take = 100
        const skip = (page -1) * take
        let range = {
            first: skip+1, 
            last: (skip + take > count) ? count : skip + take
        }
    
    
        if (!orderBy) orderBy = 'tag'
        if (!direction) direction = 'ASC'
        const pageContents = await PageContent.find({relations: ['page', 'page.pageTitle', 'image'], order: { [orderBy]: direction }, skip, take})
        
        const totalPages = count / take
        let next
        let previous
    
        if (totalPages > page) next = `/contents/?page=${page+1}`
        else next = null
        if (page > 1) previous = `/contents/?page=${page-1}`
        else previous = null
    
        return {count, next, previous, pageContents, range}

    }

    @Get('/contents/:id')
    async onePageContent(
        @Param('id') id: number
    ) {
        const pageContent = await PageContent.findOne(id, {relations: ['page', 'page.pageTitle', 'image']})
        if (!pageContent) throw new BadRequestError('That pageContent does not exist')
        return pageContent
    }

    @Authorized()
    @HttpCode(201)
    @Put('/contents/:id([0-9]+)')
    async updatePageContent(
        @Param('id') id: number,
        @Body() update: Partial<PageContent>,
    ) {
        const content = await PageContent.findOne(id, {relations: ['page', 'page.pageTitle', 'image']})

        if (!content) throw new NotFoundError('Cannot find page content')
        
        return PageContent.merge(content, update).save()
    }

    @Authorized()
    @HttpCode(201)
    @Put('/contents/:id([0-9]+)/image')
    async updatePageContentImage(
        @Param('id') id: number,
        @Body() update: Partial<Image>
    ) {

        const content = await PageContent.findOne(id, {relations: ['page', 'page.pageTitle', 'image']})

        if (!content) throw new NotFoundError('Cannot find page content')

        const image = await Image.create({
            url: update.url,
            altText: content.headline
        }).save()

        return content.image = image,
            PageContent.merge(content, update).save()
    }
}