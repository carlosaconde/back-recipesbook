import { DataTypes } from "sequelize";
import db from "../db/connection";

const Role = db.define("Role", {
  rol: {
    type: DataTypes.STRING,
    allowNull:false,
    defaultValue: "USER",
    validate: {
      isAlpha: true,
      notEmpty: true,
      
      min: 3,
    },
}})
export default Role