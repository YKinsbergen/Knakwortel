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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Recipe = class Recipe extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Topping),
    typeorm_1.JoinTable({ name: "RecipeConfigurations" }),
    __metadata("design:type", Array)
], Recipe.prototype, "toppings", void 0);
Recipe = __decorate([
    typeorm_1.Entity()
], Recipe);
exports.Recipe = Recipe;
let Topping = class Topping extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Topping.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Topping.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(_ => ToppingType, toppingType => toppingType.topping),
    __metadata("design:type", Array)
], Topping.prototype, "toppingTypes", void 0);
Topping = __decorate([
    typeorm_1.Entity()
], Topping);
exports.Topping = Topping;
let RecipeConfigurations = class RecipeConfigurations extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], RecipeConfigurations.prototype, "ingredient", void 0);
__decorate([
    typeorm_1.PrimaryColumn('int'),
    __metadata("design:type", Number)
], RecipeConfigurations.prototype, "recipeId", void 0);
__decorate([
    typeorm_1.PrimaryColumn('int'),
    __metadata("design:type", Number)
], RecipeConfigurations.prototype, "toppingId", void 0);
__decorate([
    typeorm_1.OneToOne(() => Recipe),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Recipe)
], RecipeConfigurations.prototype, "recipe", void 0);
__decorate([
    typeorm_1.OneToOne(() => Topping),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Topping)
], RecipeConfigurations.prototype, "topping", void 0);
RecipeConfigurations = __decorate([
    typeorm_1.Entity()
], RecipeConfigurations);
exports.RecipeConfigurations = RecipeConfigurations;
let ToppingType = class ToppingType extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ToppingType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ToppingType.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => Topping, topping => topping.toppingTypes),
    __metadata("design:type", Topping)
], ToppingType.prototype, "topping", void 0);
ToppingType = __decorate([
    typeorm_1.Entity()
], ToppingType);
exports.ToppingType = ToppingType;
//# sourceMappingURL=entity.js.map