// src/advertisements/controller.ts
import { JsonController, Get, Body, HttpCode, Post, Param } from "routing-controllers";
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

    @Post('/recipes')
    @HttpCode(201)
    async createRecipe(
      @Body() recipe: Recipe
    ) {
        return recipe.save()
    }
}
