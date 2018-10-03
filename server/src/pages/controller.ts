// src/advertisements/controller.ts
import { JsonController, Get } from "routing-controllers";
import Page from './entities'

@JsonController()
export class PageController{
    @Get('/pages')
    allAdvertisements = async() => {
        const pages = await Page.find()
        return {pages}
    }


}


//www.knakwortel.nl/:locale
//@Param(locale)
// if (!locale) 
// page.locale = NL