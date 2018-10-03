// src/advertisements/controller.ts
import { JsonController, Get, Param, BadRequestError, QueryParam} from "routing-controllers";
import {Page, PageContent} from './entities'

@JsonController()
export class PagesController {
    @Get('/pages/:id')
    async onePage (
        @Param('id') id: number
    ) {
        const page = await Page.findOne(id, {relations: ['pageTitle']})
        const pageContents = await PageContent.find({where: {page}, order: {order: 'ASC'}})


        if (page) page.pageContents = pageContents
        return page
    }

    @Get('/contents')
    async allContentBlocks(
        @QueryParam('page') page: number,
        @QueryParam('orderBy') orderBy: string,
        @QueryParam('direction') direction: string
    ) {

        const count = await PageContent.count({relations: ['page', 'page.pageTitle']})

        if (!page) page = 1
        const take = 5
        const skip = (page -1) * take
        let range = {
            first: skip+1, 
            last: (skip + take > count) ? count : skip + take
        }
    
    
        if (!orderBy) orderBy = 'order'
        if (!direction) direction = 'ASC'
        const pageContents = await PageContent.find({relations: ['page', 'page.pageTitle'], order: { [orderBy]: direction }, skip, take})
        
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
        const pageContent = await PageContent.findOne(id, {relations: ['page', 'page.pageTitle']})
        if (!pageContent) throw new BadRequestError('That pageContent does not exist')
        return pageContent
    }
}
