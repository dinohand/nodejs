import { DataSource } from "typeorm"
import { WORK_LOG } from "./log/entities/log.entity"

export const AdminDataSource = new DataSource({
    type: 'mysql',
    host: '130.162.132.254',
    port: 3306,
    username: 'middleware',
    password: 'password',
    database: 'gp1',
    logging: true, // false,
    entities: [WORK_LOG],
    synchronize: true
}
)

AdminDataSource.initialize()
    .then(() => {
        console.log("Admin Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })