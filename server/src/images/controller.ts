// src/advertisements/controller.ts
import { JsonController, Get, Put, Param, Post, HttpCode, Body, NotFoundError } from "routing-controllers";
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

    @Post('/images') // Pipe naar bucket???
    @HttpCode(201)
    createAd(
      @Body() image: Image
    ) {
      return image.save()
    }

      //@Authorized
      @HttpCode(201)
      @Put('/images/:id([0-9]+)')
      async updateImage(
          @Param('id') id: number,
          @Body() update: Partial<Image>
      ) {
          const image = await Image.findOne(id)
          if (!image) throw new NotFoundError('Cannot find image')
  
          return Image.merge(image, update).save()
      }
}