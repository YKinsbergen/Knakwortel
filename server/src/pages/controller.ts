// src/advertisements/controller.ts
import { JsonController, Get, Param} from "routing-controllers";
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
}
