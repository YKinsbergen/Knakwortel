import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, 

    JoinTable, ManyToMany, OneToMany, ManyToOne, OneToOne, JoinColumn,  } from 'typeorm';

import Image from '../images/entity';

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable: true})
    name: string

    @Column('text', {nullable: true})
    description: string

    @Column('text', {nullable: true})
    youtubeUrl: string

    @OneToOne(_ => Image)
    @JoinColumn()
    image: Image

    @ManyToMany(() => Topping)
    @JoinTable({name: "recipe_configurations"})
    toppings: Topping[]
}

@Entity()
export class ToppingType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(_ => Topping, topping => topping.toppingType)
    toppings: Topping[]
}

@Entity()
export class Topping extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(_ => ToppingType, toppingType => toppingType.toppings)
    toppingType: ToppingType

    @OneToOne(_ => Image)
    @JoinColumn()
    image: Image
}

