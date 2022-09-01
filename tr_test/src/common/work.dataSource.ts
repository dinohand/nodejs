import { DataSource } from "typeorm"
import { WORK_NOTE } from "./db/entities/db.entity"

export const DbDataSource = new DataSource({
    type: 'mysql',
    host: '130.162.132.254',
    port: 3306,
    username: 'middleware',
    password: 'password',
    database: 'work',
    logging: true, // false,
    entities: [WORK_NOTE],
    synchronize: true
}
)

DbDataSource.initialize()
    .then(() => {
        console.log("Work Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })