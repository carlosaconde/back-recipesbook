import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../controller/user";
import { check } from "express-validator";

import Rol from "../models/rol";
import validateFields from "../middlewares/validate-fields";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post(
  "/",
  [
    check("email", "el email no es valido").isEmail(),
    check("name", "El nombre es obligatorio").notEmpty(),
    check("password", "el password debe ser de al menos 8 caracteres").isLength(
      { min: 8 }
    ),
    // check('rol','no es un rol valido').isIn(['ADMIN','USER']),
    //     check('rol').custom(async(rol='')=>{
    // const existeRol = await Rol.findOne({
    //     where: {
    //     rol: rol
    // }
    // });
    //         if(!existeRol){
    //             throw new Error(`el rol ${rol} no existe`)
    //         }
    //     }),
    validateFields,
  ],
  postUser
);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
