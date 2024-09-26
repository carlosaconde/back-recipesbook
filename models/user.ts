import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      notEmpty: true,
      min: 3,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  rol: {
    type: DataTypes.STRING,
    // validate: {
    //   isIn: [["USER", "ADMIN"]],
    // },
    defaultValue: "USER",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 8,
    },
  },
});

export default User;
