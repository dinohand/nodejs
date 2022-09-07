import { DataSource, InitializedRelationError, QueryRunner } from "typeorm"
import { JOBS } from "./common/jobloader/entities/job.entity";
import { join } from 'path';


export class JobMananager {
    public JSOBJOB: JOBS;
    private JobDataSource: DataSource;

    constructor() {
        this.init;
        this.initDB();
    }


    private init() {
        const fs = require('fs');
        const jsonFileName = `${process.cwd()}/json/data.json`;

        console.debug(jsonFileName)

        const jsonFile = fs.readFileSync(jsonFileName, 'utf8');
        const jsonData = JSON.parse(jsonFile);

        const jobData = jsonData.JOBS;

        // jobData.forEach( item => {  console.log(item); });
        this.JSOBJOB = jobData;

    }

    private async initDB() {

        this.JobDataSource = new DataSource({
            type: 'mysql',
            host: '130.162.132.254',
            port: 3306,
            username: 'middleware',
            password: 'password',
            database: 'work',
            logging: true,
            entities: [JOBS],
        })

        this.JobDataSource.initialize()
            .then(() => {
                console.log("Data Source has been initialized!")
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err)
            })

        // try {
        //     await queryRunner.manager.insert(Receiving, receiving);
        //     await queryRunner.manager.increment(
        //      Stock,
        //      { id: receiving.product.id },
        //      "count",
        //      receiving.qty
        //     );
        //     // commit transaction.
        //     await queryRunner.commitTransaction();
        // } catch (error) {
        //     await queryRunner.rollbackTransaction();
        //     throw error;
        // }

    }

    public async selectData(): Promise<JSON> {
        // const queryRunner = QueryRunner;
        const queryRunner = this.JobDataSource.createQueryRunner();

        await queryRunner.connect();
        // await queryRunner.startTransaction();
        const result = await queryRunner.query('SELECT * FROM JOBS');
        console.log('[Select * from JOBS]');
        console.log(result);

        return result;

    }



    //     async save2db(){
    //         // return this.JSOBJOB;
    //         return ( await this.getData() );
    //     }

    //     async getData(): Promise<JOBS[]> {
    //         return  this.JobDataSource.manager.find(JOBS);
    //       }
    // }
}