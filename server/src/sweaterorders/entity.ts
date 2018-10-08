// src/admins/entity.ts
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsEmail, IsString, MinLength, MaxLength, IsNumber} from 'class-validator';

@Entity()
export default class Order extends BaseEntity {
    
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
    @Column('integer', {nullable:false})
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
    @Column ('text', {nullable:false})
    size: string

    @Column('boolean', {default: false})
    paymentSucces: boolean

}