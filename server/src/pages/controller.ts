// src/advertisements/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body, Param } from "routing-controllers";
import Page from './entities'

@JsonController()
export class PlaceholderController {
    @Get('/placeholders')
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


//www.knakwortel.nl/:locale
//@Param(locale)
// if (!locale) 
// page.locale = NL