// src/advertisements/controller.ts
import { JsonController, Get, Body, HttpCode, Post, Delete, NotFoundError, Param } from "routing-controllers";
import { Recipe } from "./entity";


@JsonController()
export class RecipeController {
    @Get('/recipes')
    allRecipes = async() => {
        const recipes = await Recipe.find({relations: ["toppings", "toppings.toppingTypes"]})
        return {recipes}
    }

    @Get('/recipes/:id')
    async getRecipe(
    @Param('id') id: number) { 
        const recipe = await Recipe.findOne(id, {relations: ["toppings", "toppings.toppingTypes"]})
        return recipe
    }

    //@Authorized()
    @Post('/recipes')
    @HttpCode(201)
    async createRecipe(
      @Body() recipe: Recipe
    ) {
        return recipe.save()
    }

    //@Authorized()
    @Delete('/recipes')
    async deleteRecipe(
        @Param('id') id: number,
    ) {
        const recipeToDelete = await Recipe.findOne(id)
        if (!recipeToDelete) throw new NotFoundError('Cannot find recipe')
        return Recipe.delete(recipeToDelete)
    }
    
}
