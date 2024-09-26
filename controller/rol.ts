import { Request, Response } from "express";

import Role from "../models/rol";

export const getRol = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const rol = await Role.findOne({
      where: {
        rol: body.rol,
      },
    });

    res.json(rol);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Comuniquese con el administrador",
    });
  }
};
