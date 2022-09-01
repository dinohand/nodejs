import { DataSource } from "typeorm"
import { batch_job_execution } from './entities/batch_job_execution.entity'
import { batch_schedule } from './entities/batch_schedule.entity'
import { batch_job } from './entities/batch_job.entity'


export const TaskfDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: true,
    //     entities: [batch_job_execution, batch_schedule, batch_job ],
    entities: [batch_job_execution],
}
)

TaskfDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })