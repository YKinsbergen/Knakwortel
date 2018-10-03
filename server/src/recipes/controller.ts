// src/advertisements/controller.ts
import { JsonController, Get, Body, HttpCode, Post } from "routing-controllers";
import { Recipe } from "./entity";


@JsonController()
export class RecipeController {
    @Get('/recipes')
    allAdvertisements = async() => {
        const recipes = await Recipe.find({relations: ["toppings"]})
        return {recipes}
    }

    @Post('/recipes')
    @HttpCode(201)
    async createRecipe(
      @Body() recipe: Recipe
    ) {
        return recipe.save()
    }
}
