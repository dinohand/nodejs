import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({
    name: 'work_note',
    orderBy: {
        ID: 'DESC'
    }
})

export class WORK_NOTE {
    // @PrimaryGeneratedColumn()
    // id: number;
    @PrimaryGeneratedColumn({ name: 'id', comment: 'PK' })
    id: number;    // id

    @Column({ name: 'CNTS', type: 'varchar', length: 50, comment: '상품코드' })
    contents: string;

    @CreateDateColumn({ name: 'CRDT' })
    createDate: Date;    // 작업 일시

    @Column({ type: 'varchar', length: 20, comment: '작업 상태' })
    status: string;

    @Column({ name: 'RMRK', type: 'varchar', length: 2000, comment: '비고' })
    remark: string;
}
