// src/advertisements/controller.ts

import { JsonController, Get, HttpCode, Post, Delete, NotFoundError, Param, Authorized, BodyParam,  } from "routing-controllers";
import { Recipe, Topping } from "./entity";




@JsonController()
export class RecipeController {
    @Get('/recipes')
    allRecipes = async() => {
        const recipes = await Recipe.find({relations: ["toppings", "toppings.toppingTypes", "toppings.image"]})
        return {recipes}
    }

    @Get('/recipes/:id')
    async getRecipe(
    @Param('id') id: number) { 
        const recipe = await Recipe.findOne(id, {relations: ["toppings", "toppings.toppingTypes"]})
        return recipe
    }

    @Get('/toppings')
    async getAllToppings() {
        const toppings = await Topping.find()
        return {toppings}
    }

    @Authorized()
    @Post('/recipes')
    @HttpCode(201)
    async createRecipe(
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
