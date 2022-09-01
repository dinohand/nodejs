import { DataSource } from "typeorm"
import { TEST_TABL } from "./entities/test.entity"

export const TestDataSource = new DataSource({
  type: 'mysql',
  //   host: process.env.LDB_HOST,
  //   port: Number(process.env.LDB_PORT),
  //   username: process.env.LDB_USER,
  //   password: process.env.LDB_PASSWORD,
  //   database: process.env.LDB_DATABASE,

  // host: 'localhost',
  // port: 3306,

  host: '13.209.154.237',
  port: 54905,
  username: 'middleware',
  password: 'password',
  database: 'work',
  logging: true,
  entities: [TEST_TABL],
}
)


TestDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })