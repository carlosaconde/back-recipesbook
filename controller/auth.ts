import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  res.json({
    msg: "login ok",
  });
};
