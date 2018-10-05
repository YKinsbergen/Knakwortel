// src/advertisements/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body } from "routing-controllers";
import Image from './entity'

@JsonController()
export class ImageController {
    @Get('/images')
    allImages = async() => {
        const images = await Image.find({relations: ["pageContents"]})
        return {images}
    }

    @Get('/images/:id')
    getImage(
    @Param('id') id: number) { 
        return Image.findOne(id)
    }

    @Post('/images')
    @HttpCode(201)
    async createImage(
      @Body() image: Image
    ) {
        await Image.create({
            url: image.url
        }).save()
        
        return image
    }
}