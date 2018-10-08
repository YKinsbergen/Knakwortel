// src/advertisements/controller.ts
import { JsonController, Get, HttpCode, Post, Delete, NotFoundError, Param, Authorized, BodyParam,  } from "routing-controllers";
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

    // @Authorized()
    @Post('/recipes')
    @HttpCode(201)
    async createRecipe(
      @BodyParam('name') name: string,
      @BodyParam('description') description: string,
      @BodyParam('toppings') toppings: any
    ) {
        console.log(toppings)
        const recipe = await Recipe.create({name, description})
        recipe.save()
        // toppings.forEach(async (topp) => {
        //     try {
        //         const topping = await Topping.findOne(parseInt(topp))
        //         if (!topping) throw new NotFoundError('Topping doesnt exist')
        //         console.log('*****TOPPING',topping)
        //         const recConfig = await RecipeConfiguration.create({recipe, topping})
        //         recConfig.save()
        //     } catch(err) {
        //         console.log(err)
        //     }
        // })

        return recipe
    }

    @Authorized()
    @Delete('/recipes')
    async deleteRecipe(
        @Param('id') id: number,
    ) {
        const recipeToDelete = await Recipe.findOne(id)
        if (!recipeToDelete) throw new NotFoundError('Cannot find recipe')
        return Recipe.delete(recipeToDelete)
    }
    
}
