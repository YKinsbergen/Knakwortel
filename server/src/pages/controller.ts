// src/advertisements/controller.ts
import { JsonController, Get, Param} from "routing-controllers";
import {Page} from './entities'

@JsonController()
export class PagesController {
    @Get('/pages/:id')
    async onePage (
        @Param('id') id: number
    ) {
        const page = await Page.findOne(id, {relations: ['pageTitle', 'pageContents', 'pageContents.image']})
        return page
    }
}