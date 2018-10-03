// src/advertisements/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body } from "routing-controllers";
import Image from './entity'

@JsonController()
export class ImageController {
    @Get('/images')
    allImages = async() => {
        const images = await Image.find()
        return {images}
    }

    @Get('/images/:id')
    getImage(
    @Param('id') id: number) { 
        return Image.findOne(id)
    }

    @Post('/images') // Pipe naar AWS S3????
    @HttpCode(201)
    createAd(
      @Body() image: Image
    ) {
      return image.save()
    }

}