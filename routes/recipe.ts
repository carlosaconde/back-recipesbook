import { Router } from "express";

import { check } from "express-validator";
import {
  deleteRecipe,
  getRecipe,
  getRecipes,
  postRecipe,
  putRecipe,
} from "../controller/recipe";
import validateFields from "../middlewares/validate-fields";

const router = Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post(
  "/",
  [
    check("title", "el titulo es obligatorio").notEmpty(),
    check("recipe", "la receta es obligatoria").notEmpty(),
    check("dificulty", "la dificultad es obligatoria").notEmpty(),
    validateFields,
  ],
  postRecipe
);
router.put("/:id", putRecipe);
router.delete("/:id", deleteRecipe);

export default router;
