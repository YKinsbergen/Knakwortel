"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let RecipeController = class RecipeController {
    constructor() {
        this.allAdvertisements = async () => {
            const recipes = await entity_1.Recipe.find({ relations: ["toppings"] });
            return { recipes };
        };
    }
    async createRecipe(recipe) {
        return recipe.save();
    }
};
__decorate([
    routing_controllers_1.Get('/recipes'),
    __metadata("design:type", Object)
], RecipeController.prototype, "allAdvertisements", void 0);
__decorate([
    routing_controllers_1.Post('/recipes'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.Recipe]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "createRecipe", null);
RecipeController = __decorate([
    routing_controllers_1.JsonController()
], RecipeController);
exports.RecipeController = RecipeController;
//# sourceMappingURL=controller.js.map