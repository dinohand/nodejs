export class Log { }
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({
    name: 'LOG_MST',
    orderBy: {
        ID: 'DESC',
        DTTM: 'ASC'
    }
})
export class LOG_MST {
    // @PrimaryGeneratedColumn()
    // id: number;

    // @PrimaryColumn()
    @PrimaryGeneratedColumn({ comment: 'PK' })
    ID: Number;    // id

    @CreateDateColumn()
    // @Column({ type: 'datetime', comment: '일시' })
    DTTM: Date;    // 일시

    @Column({ type: 'varchar', length: 20, comment: '스테이지' })
    STAG: string;

    @Column({ type: 'varchar', length: 10, comment: '로그 형태-ERROR,WARN,DEBUG,LOG,VERBOSE' })
    TYPE: string;

    @Column({ type: 'varchar', length: 1000, comment: '로그 메시지' })
    LOG_TEXT: string;

    @Column({ type: 'varchar', length: 100, comment: '이벤트명' })
    EVNT_NAME: string;

    @Column({ type: 'varchar', length: 20, comment: '에러코드' })
    ERR_CODE: string;

    @Column({ type: 'varchar', length: 100, comment: '비고' }) RMRK: string;
}
