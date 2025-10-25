import { Sequelize } from "sequelize";
import "dotenv/config";

const banco: string = process.env.DB_TABLE!;
const user: string = process.env.DB_USERNAME!;
const password: string = process.env.DB_PASSWORD!;
const host: string = process.env.DB_HOST!;
const port: number = Number(process.env.DB_PORT!);

const sequelize = new Sequelize(banco, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

export default sequelize;
