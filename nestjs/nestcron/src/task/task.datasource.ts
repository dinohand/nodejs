import { DataSource } from "typeorm"
import { batch_job } from './entities/batch_job.entity'
// import { batch_job_execution } from './entities/batch_job_execution.entity'
// import { batch_schedule } from "./entities/batch_schedule.entity"


export const TaskfDataSource = new DataSource({
    type: 'mysql',
    host: '13.209.154.237',
    port: 54905,
    username: 'middleware',
    password: 'password',
    database: 'gp1',
    logging: true,
    //     entities: [batch_job_execution, batch_schedule, batch_job ],
    //  entities: [batch_job, batch_job_execution, batch_schedule],
    entities: [batch_job],
}
)

TaskfDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })