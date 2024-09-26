"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.putRecipe = exports.postRecipe = exports.getRecipe = exports.getRecipes = void 0;
const recipe_1 = __importDefault(require("../models/recipe"));
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipe_1.default.findAll();
    res.json({ recipes });
});
exports.getRecipes = getRecipes;
const getRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const recipe = yield recipe_1.default.findByPk(id);
    if (recipe) {
        res.json({ recipe });
    }
    else {
        res.status(404).json({
            msg: `No existe la receta con el id ${id}`,
        });
    }
});
exports.getRecipe = getRecipe;
const postRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const usuario = yield recipe_1.default.create(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Comuniquese con el administrador",
        });
    }
});
exports.postRecipe = postRecipe;
const putRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const recipe = yield recipe_1.default.findByPk(id);
        if (!recipe) {
            return res.status(404).json({
                msg: "No existe la receta con el id" + id,
            });
        }
        yield recipe.update(body);
        res.json(recipe);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Comuniquese con el administrador",
        });
    }
});
exports.putRecipe = putRecipe;
const deleteRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const recipe = yield recipe_1.default.findByPk(id);
    if (!recipe) {
        return res.status(404).json({
            msg: "No existe la receta con el id" + id,
        });
    }
    //await usuario.destroy();
    yield recipe.update({ estate: false });
    res.json(recipe);
});
exports.deleteRecipe = deleteRecipe;
//# sourceMappingURL=recipe.js.map