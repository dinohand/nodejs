import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({
    name: 'GP1_TEST_TABL'
})
export class TEST_TABL implements I_TEST_TABL{
    @PrimaryGeneratedColumn()
    id: number;

    // @PrimaryColumn()
    // id: string;

    @Column()
    message: string;

    @Column()
    remark: string;
}

export interface I_TEST_TABL{
    id:number,
    message: string,
    remark:string
}