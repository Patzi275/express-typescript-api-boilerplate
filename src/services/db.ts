import { Sequelize } from "sequelize-typescript";
import dbConfig from "../config/db.config";
import User from "../models/user.model";

const models = [User];

const db = new Sequelize({
    database: dbConfig.DATABASE,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    host: dbConfig.HOST,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    models: [User]
});

export default db;