import { DataSource } from "typeorm"
import { PRDT_ENT } from './entities/sosc.entity'

export const SoscDataSource = new DataSource({
    type: 'mysql',
    host: '130.162.132.254',
    port: 3306,
    username: 'middleware',
    password: 'password',
    database: 'sosc',
    logging: true,
    entities: [PRDT_ENT],
}
)

SoscDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })