import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";


@Entity({
    name: 'batch_job_execution.entity',
    orderBy: {
        ID: 'DESC'
    }
})

export class batch_job_execution {
    // @PrimaryGeneratedColumn()
    // id: number;
    @Column({ comment: 'PK' })
    @PrimaryColumn()
    // @PrimaryGeneratedColumn({ comment: 'PK' })
    JOB_EXECUTION_ID: Number;    // id

    @Column({ comment: 'version' })
    VERSION: Number;

    @Column({ comment: 'JOB_INSTANCE_ID' })
    JOB_INSTANCE_ID: Number;

    @CreateDateColumn({ comment: 'CREATE_TIME' })
    CREATE_TIME: Date;

    @CreateDateColumn({ comment: 'START_TIME' })
    START_TIME: Date;
 
    @CreateDateColumn({ comment: 'END_TIME' })
    END_TIME: Date;

    @Column({ type: 'varchar', length: 10, comment: '상태' })
    STATUS: string;

    @Column({ type: 'varchar', length: 2500, comment: 'EXIT_CODE' })    // length: 2500 ?
    EXIT_CODE: string;

    @Column({ type: 'varchar', length: 2500, comment: 'EXIT_MESSAGE' })    // length: 2500 ?
    EXIT_MESSAGE: string;

    @Column({ comment: 'RETRY_TIME' })
    RETRY_TIME: Number;

    @CreateDateColumn({ comment: 'LAST_UPDATED' })
    LAST_UPDATED: Date;
}

