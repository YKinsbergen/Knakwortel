// src/advertisements/controller.ts

import { JsonController, Get, HttpCode, Post, Delete, NotFoundError, Param, Authorized, BodyParam, Put, BadRequestError } from "routing-controllers";
import { Recipe, Topping, ToppingType } from "./entity";
import Image from '../images/entity'




@JsonController()
export class RecipeController {
    @Get('/recipes')
    allRecipes = async() => {
        const recipes = await Recipe.find({relations: ["toppings", "toppings.toppingType", "toppings.image", "image"]})
        return {recipes}
    }

    @Get('/recipes/:id')
    async getRecipe(
    @Param('id') id: number) { 
        const recipe = await Recipe.findOne(id, {relations: ["toppings", "toppings.toppingType", "image"]})
        return recipe
    }

    @Get('/toppings')
    async getAllToppings() {
        const toppings = await Topping.find({relations: ['image', 'toppingType']})
        return {toppings}
    }

    @Get('/toppingtypes')
    async getToppingTypes() {
        const toppingTypes = await ToppingType.find()
        return {toppingTypes}
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

        if (imageUrl && imageUrl.length > 1) {
            image = await Image.create({
                url: imageUrl,
                altText: name
            }).save()
        }

        const recipe = await Recipe.create({name, description, toppings: toppingEntities, youtubeUrl, image})
        

        return recipe.save()
    }

    @Authorized()
    @Post('/toppings')
    @HttpCode(201)
    async createTopping(
      @BodyParam('name') name: string,
      @BodyParam('toppingType') tType: number,
      @BodyParam('uploadedFileCloudinaryUrl') imageUrl: string,

    ) {
        const toppingType = await ToppingType.findOne(tType)
        if (!toppingType) throw new BadRequestError('type not there')
        
        let image: any = null

        if (imageUrl.length > 1) {
            image = await Image.create({
                url: imageUrl,
                altText: name
            }).save()
        }

        const recipe = await Topping.create({name , toppingType, image})
        

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
        recipeToDelete.remove()
        return recipeToDelete
    }
    
}
