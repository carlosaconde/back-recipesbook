import { DataTypes } from "sequelize";
import db from "../db/connection";

const Recipe = db.define("Recipe", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 3,
    },
  },
  img: {
    type: DataTypes.STRING,
    defaultValue:
      "https://www.shutterstock.com/shutterstock/photos/2153338009/display_1500/stock-vector-cookbook-open-book-with-photos-of-tomato-recipes-beautiful-notebook-with-bookmark-icon-for-2153338009.jpg",
  },
  recipe: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  dificulty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      notEmpty: true,
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
export default Recipe;
