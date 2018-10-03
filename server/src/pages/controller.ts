// src/advertisements/controller.ts
import { JsonController, Get, Param, BadRequestError} from "routing-controllers";
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
    ) {
        const pageContents = await PageContent.find({relations: ['page', 'page.pageTitle']})
        return {pageContents}
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
