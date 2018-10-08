// src/advertisements/controller.ts
import { JsonController, Get, Delete, NotFoundError, Param } from "routing-controllers";
import { Recipe } from "./entity";


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
