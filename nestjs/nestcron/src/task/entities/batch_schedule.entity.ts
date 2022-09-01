import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";


@Entity({
    name: 'batch_schedule',
    orderBy: {
        BATCH_WORK_NO: 'DESC'
    }
})

export class batch_schedule {
    // @PrimaryGeneratedColumn()
    // id: number;
    // @PrimaryGeneratedColumn({ comment: 'PK' })
    // ID: Number;    // id


    @Column( { type: 'varchar', length: 40, default: '', comment: '작업번호' } )
    @PrimaryColumn()
    BATCH_WORK_NO: string;

    @Column({ type: 'varchar', length: 800, default: '', comment: '상품명' })
    BATCH_WORK_NM: string;

    @Column({ type: 'char', length: 1, default: '', comment: '사용유무' })
    USE_YN: string;

    @Column({ type: 'varchar', length: 1500, default: '', comment: '비고' })
    RMK: string;

    @CreateDateColumn({comment:'IN_DT'})
    IN_DT: Date;    

    @Column({ type: 'varchar', length: 30, comment: 'IN_ID' })
    IN_ID: string;

    @CreateDateColumn({comment:'UP_DT'})
    UP_DT: Date;    

    @Column({ type: 'varchar', length: 30, comment: 'UP_ID' })
    UP_ID: string;

}
