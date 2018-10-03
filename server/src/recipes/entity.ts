// src/advertisements/entity.ts
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, 
    JoinTable, ManyToMany, OneToMany, ManyToOne, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name: string

    @Column()
    description: string

    @ManyToMany(() => Topping)
    @JoinTable({name: "RecipeConfigurations"})
    toppings: Topping[]
}

@Entity()
export class Topping extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(_ => ToppingType, toppingType => toppingType.topping)
    toppingTypes: ToppingType[]
}

@Entity()
export class RecipeConfigurations extends BaseEntity {
    @Column({ type: 'text' })
    ingredient: string
    
    @PrimaryColumn('int')
    recipeId: number
    
    @PrimaryColumn('int')
    toppingId: number
    
    @OneToOne(() => Recipe)
    @JoinColumn()
    recipe: Recipe
    
    @OneToOne(() => Topping)
    @JoinColumn()
    topping: Topping
}

@Entity()
export class ToppingType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(_ => Topping, topping => topping.toppingTypes)
    topping: Topping
}