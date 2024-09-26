"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const recipe_1 = require("../controller/recipe");
const validate_fields_1 = __importDefault(require("../middlewares/validate-fields"));
const router = (0, express_1.Router)();
router.get("/", recipe_1.getRecipes);
router.get("/:id", recipe_1.getRecipe);
router.post("/", [
    (0, express_validator_1.check)("title", "el titulo es obligatorio").notEmpty(),
    (0, express_validator_1.check)("recipe", "la receta es obligatoria").notEmpty(),
    (0, express_validator_1.check)("dificulty", "la dificultad es obligatoria").notEmpty(),
    validate_fields_1.default,
], recipe_1.postRecipe);
router.put("/:id", recipe_1.putRecipe);
router.delete("/:id", recipe_1.deleteRecipe);
exports.default = router;
//# sourceMappingURL=recipe.js.map