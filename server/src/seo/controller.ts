// src/advertisements/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body } from "routing-controllers";
import SeoTag from '.entities'

@JsonController()
export class SeoController {
    @Get('/seotag')
    allAdvertisements = async() => {
        const placeholders = await Placeholder.find()
        return {placeholders}
    }

    @Get('/ads/:id')
    getAd(
    @Param('id') id: number) { 
        return Placeholder.findOne(id)
    }

    @Post('/ads')
    @HttpCode(201)
    createAd(
      @Body() placeholder: Placeholder
    ) {
      return placeholder.save()
    }

}