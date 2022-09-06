import { Column, Entity, PrimaryGeneratedColumn , PrimaryColumn } from "typeorm";


@Entity({
    name: 'JOBS',
    orderBy: {
        id: 'DESC'
    }
})

@Entity()
export class JOBS {
    @PrimaryColumn({ comment: 'PK' })
    id: number;    // id

    @Column({ type: 'varchar', length: 100, comment: '' })
    name: string;

    @Column({ type: 'varchar', length: 100, comment: '' })
    url: string;
}

export interface i_JOBS {
    id: number,
    name: string,
    url: string
}

