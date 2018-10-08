import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, 
    JoinTable, ManyToMany, OneToMany, ManyToOne, OneToOne, JoinColumn,  } from 'typeorm';
import Image from '../images/entity';

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name: string

    @Column()
    description: string

    @ManyToMany(() => Topping)
    @JoinTable({name: "recipe_configurations"})
    toppings: Topping[]
}

@Entity()
export class Topping extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(_ => ToppingType, toppingType => toppingType.topping)
    toppingTypes: ToppingType[]

    @OneToOne(_ => Image)
    @JoinColumn()
    image: Image
}

// @Entity()
// export class RecipeConfigurations extends BaseEntity {
//     @Column({ type: 'text' })
//     ingredient: string
    
//     @PrimaryColumn('int')
//     recipeId: number
    
//     @PrimaryColumn('int')
//     toppingId: number
    
//     @OneToOne(() => Recipe)
//     @JoinColumn()
//     recipe: Recipe
    
//     @OneToOne(() => Topping)
//     @JoinColumn()
//     topping: Topping
// }

@Entity()
export class ToppingType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(_ => Topping, topping => topping.toppingTypes)
    topping: Topping
}