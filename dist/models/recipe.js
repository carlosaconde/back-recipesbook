"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Recipe = connection_1.default.define("Recipe", {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 3,
        },
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "https://www.shutterstock.com/shutterstock/photos/2153338009/display_1500/stock-vector-cookbook-open-book-with-photos-of-tomato-recipes-beautiful-notebook-with-bookmark-icon-for-2153338009.jpg",
    },
    recipe: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    dificulty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            notEmpty: true,
        },
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
});
exports.default = Recipe;
//# sourceMappingURL=recipe.js.map