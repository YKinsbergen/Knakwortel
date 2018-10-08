// src/admins/entity.ts
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { IsEmail, IsString, MinLength, MaxLength, IsNumber, IsBoolean} from 'class-validator';


@Entity()
export class Size extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text', {nullable:true})
    name: string

    @OneToMany(_ => Order, order => order.size)
    orders: Order[]

    @IsBoolean()
    @Column('boolean', {default: true})
    available: boolean
    
}

@Entity()
export class Order extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text', {nullable:true})
    company: string

    @IsString()
    @Column('text', {nullable:false})
    name: string

    @IsEmail()
    @MinLength(8)
    @Column ('text', {nullable:false})
    email: string

    @IsString()
    @MinLength(2)
    @Column('text', {nullable:false})
    street: string

    @IsNumber()
    @Column('int', {nullable:false})
    houseNumber: number

    @IsString()
    @Column('text', {nullable:true})
    addition: string

    @IsString()
    @MaxLength(7)
    @Column('text', {nullable:false})
    zipcode: string

    @IsString()
    @MinLength(2)
    @Column('text', {nullable:false})
    city: string
    
    @IsString()
    @ManyToOne(_ => Size, size => size.orders, {eager:true})
    size: Size

    @Column('boolean', {default: false})
    paymentSucces: boolean

}
