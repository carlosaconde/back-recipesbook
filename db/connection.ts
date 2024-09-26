import { Sequelize } from "sequelize";

const db = new Sequelize("recetario", "root", "elizabeth595", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
