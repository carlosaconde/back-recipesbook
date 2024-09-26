"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Role = connection_1.default.define("Role", {
    rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "USER",
        validate: {
            isAlpha: true,
            notEmpty: true,
            min: 3,
        },
    }
});
exports.default = Role;
//# sourceMappingURL=rol.js.map