import knes from "knex"
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDatabase {
    protected static connection = knes({
        client: "mysql",
        connection:{
            host: process.env.DB_HOST,
            port:3006,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            multipleStatements: true
        }
    })
}