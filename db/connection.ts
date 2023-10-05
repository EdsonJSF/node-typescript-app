import { Sequelize } from "sequelize";

const db = new Sequelize("node_typescript_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});

export default db;
