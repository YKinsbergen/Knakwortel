// src/advertisements/controller.ts
import { JsonController, Get, Put, Param, Body, BadRequestError, NotFoundError, HttpCode } from "routing-controllers";
import SeoTag from './entities'

@JsonController()
export class SeoController {
    @Get('/seotag')
    allSeoTags = async() => {
        const seoTags = await SeoTag.find({relations: ['seoTagAttributes']})
        return {seoTags}
    }

    @Get('/seotag/:id')
    async oneSeoTag(
        @Param('id') id: number
    ) {
        const seoTag = await SeoTag.findOne(id, {relations: ['seoTagAttributes']})
        if (!seoTag) throw new BadRequestError('That pageContent does not exist')
        return seoTag
    }
    
    //@Authorized
    @HttpCode(201)
    @Put('/contents/:id([0-9]+)')
    async updatePageContent(
        @Param('id') id: number,
        @Body() update: Partial<SeoTag>
    ) {
        const tag = await SeoTag.findOne(id)
        if (!tag) throw new NotFoundError('Cannot find SEO-tag')
    
        return SeoTag.merge(tag, update).save()
    }
}
}