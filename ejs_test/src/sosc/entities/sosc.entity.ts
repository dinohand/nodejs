import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";


@Entity({
    name: 'SOSC_PRDT_MST',
    orderBy: {
        ID: 'DESC'
    }
})

export class PRDT_ENT {
    // @PrimaryGeneratedColumn()
    // id: number;
    @PrimaryGeneratedColumn({ comment: 'PK' })
    ID: Number;    // id

    @Column({ type: 'varchar', length: 50, comment: '상품코드' })
    PRDT_CODE: string;

    @Column({ type: 'varchar', length: 50, comment: '상품명' })
    PRDT_NAME: string;

    @Column({ type: 'varchar', length: 1000, comment: '제품 스펙' })
    PRDT_SPEC: string;

    @Column({ type: 'varchar', length: 1000, comment: '제품 옵션' })
    PRDT_OPTN: string;

    @Column({ type: 'varchar', length: 50, comment: '모델코드' })
    MODL_CODE: string;

    @Column({ type: 'varchar', length: 50, comment: '모델명' })
    MODL_NAME: string;

    @Column({ type: 'varchar', length: 50, comment: '판매용 제품 코드' })
    SALS_CODE: string;

    @Column({ type: 'varchar', length: 50, comment: '판매용 제품명' })
    SALS_NAME: string;

    @Column({ type: 'varchar', length: 1000, comment: '판매 규약' })
    SALS_LIMT: string;

    @Column({ type: 'varchar', length: 20, comment: '작업자' })
    JOB_ACTR: string;

    @CreateDateColumn()
    // @Column({ type: 'datetime', comment: '일시' })
    JOB_DTTM: Date;    // 작업 일시

    @Column({ type: 'varchar', length: 20, comment: '작업 상태' })
    JOB_STAT: string;

    @Column({ type: 'varchar', length: 100, comment: '비고' })
    RMRK: string;

    @Column({ type: 'varchar', length: 2000, comment: '제품데이터들' })
    PRDT_ITEMS: string;

}

export interface I_PRDT_ENT {
    ID: Number,
    PRDT_CODE: string,
    PRDT_NAME: string,
    PRDT_SPEC: string,
    PRDT_OPTN: string,
    MODL_CODE: string,
    MODL_NAME: string,
    SALS_CODE: string,
    SALS_NAME: string,
    SALS_LIMT: string,
    JOB_ACTR: string,
    // @Column({ type: 'datetime', comment: '일시' })
    JOB_DTTM: Date,   // 작업 일시
    JOB_STAT: string,
    RMRK: string,
    PRDT_ITEMS: string
}