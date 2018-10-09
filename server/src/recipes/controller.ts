// src/advertisements/controller.ts

import { JsonController, Get, HttpCode, Post, Delete, NotFoundError, Param, Authorized, BodyParam, Put } from "routing-controllers";
import { Recipe, Topping } from "./entity";
import Image from '../images/entity'




@JsonController()
export class RecipeController {
    @Get('/recipes')
    allRecipes = async() => {
        const recipes = await Recipe.find({relations: ["toppings", "toppings.toppingTypes", "toppings.image", "image"]})
        return {recipes}
    }

    @Get('/recipes/:id')
    async getRecipe(
    @Param('id') id: number) { 
        const recipe = await Recipe.findOne(id, {relations: ["toppings", "toppings.toppingTypes", "image"]})
        return recipe
    }

    @Get('/toppings')
    async getAllToppings() {
        const toppings = await Topping.find({relations: ['image', 'toppingTypes']})
        return {toppings}
    }

    @Authorized()
    @Post('/recipes')
    @HttpCode(201)
    async createRecipe(
      @BodyParam('name') name: string,
      @BodyParam('description') description: string,
      @BodyParam('toppings') toppings: string[],
      @BodyParam('uploadedFileCloudinaryUrl') imageUrl: string,
      @BodyParam('youtubeUrl') youtubeUrl: string

    ) {
        const toppingEntities = await Promise.all(
            toppings.map(toppingId => Topping.findOne(toppingId))
        )

        let image: any = null

        if (imageUrl.length > 1) {
            image = await Image.create({
                url: imageUrl
            }).save()
        }

        const recipe = await Recipe.create({name, description, toppings: toppingEntities, youtubeUrl, image})
        

        return recipe.save()
    }

    @Authorized()
    @Put('/recipes/:id')
    @HttpCode(201)
    async updateRecipe(
      @BodyParam('name') name: string,
      @BodyParam('description') description: string,
      @BodyParam('toppings') toppings: string[]
    ) {
        const toppingEntities = await Promise.all(
            toppings.map(toppingId => Topping.findOne(toppingId))
        )

        const recipe = await Recipe.create({name, description, toppings: toppingEntities})
        

        return recipe.save()
    }

    @Authorized()
    @Delete('/recipes/:id')
    async deleteRecipe(
        @Param('id') id: number,
    ) {
        const recipeToDelete = await Recipe.findOne(id)
        if (!recipeToDelete) throw new NotFoundError('Cannot find recipe')
        return Recipe.delete(recipeToDelete)
    }
    
}
