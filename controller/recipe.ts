import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import Recipe from "../models/recipe";

export const getRecipes = async (req: Request, res: Response) => {
  const recipes = await Recipe.findAll();

  res.json({ recipes });
};

export const getRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const recipe = await Recipe.findByPk(id);
  if (recipe) {
    res.json({ recipe });
  } else {
    res.status(404).json({
      msg: `No existe la receta con el id ${id}`,
    });
  }
};
export const postRecipe = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const usuario = await Recipe.create(body);

    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Comuniquese con el administrador",
    });
  }
};

export const putRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const recipe = await Recipe.findByPk(id);
    if (!recipe) {
      return res.status(404).json({
        msg: "No existe la receta con el id" + id,
      });
    }

    await recipe.update(body);
    res.json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Comuniquese con el administrador",
    });
  }
};
export const deleteRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;

  const recipe = await Recipe.findByPk(id);
  if (!recipe) {
    return res.status(404).json({
      msg: "No existe la receta con el id" + id,
    });
  }

  //await usuario.destroy();

  await recipe.update({ estate: false });

  res.json(recipe);
};
