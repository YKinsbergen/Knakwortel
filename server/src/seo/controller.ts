// src/advertisements/controller.ts
import { JsonController, Get } from "routing-controllers";
import SeoTag from './entities'

@JsonController()
export class SeoController {
    @Get('/seotag')
    allSeoTags = async() => {
        const seoTags = await SeoTag.find()
        return {seoTags}
    }

    // @Get('/ads/:id')
    // getAd(
    // @Param('id') id: number) { 
    //     return Placeholder.findOne(id)
    // }

    // @Post('/ads')
    // @HttpCode(201)
    // createAd(
    //   @Body() placeholder: Placeholder
    // ) {
    //   return placeholder.save()
    // }


    // Link met Google Analytics??
}