import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';  

@Entity()  
export class Item {  
    @PrimaryGeneratedColumn()  
    id: number;  

    @Column()  
    name: string;  

    @Column('decimal')  
    price: number;  

    @Column()  
    remaining: number;  
}  