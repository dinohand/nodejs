import { DataSource } from "typeorm"
import { JOBS } from './entities/job.entity'

export const JobDataSource = new DataSource({
    type: 'mysql',
    host: '130.162.132.254',
    port: 3306,
    username: 'middleware',
    password: 'password',
    database: 'work',
    logging: true,
    entities: [JOBS],
})

// initializse
JobDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


// # Oracle Cloud DB
// OCIDB_TYPE=mysql
// OCIDB_HOST=130.162.132.254
// OCIDB_PORT=3306
// OCIDB_USER=middleware
// OCIDB_PASSWORD=password
// OCIDB_DATABASE=work


