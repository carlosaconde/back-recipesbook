"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const express_validator_1 = require("express-validator");
const validate_fields_1 = __importDefault(require("../middlewares/validate-fields"));
const router = (0, express_1.Router)();
router.get('/', user_1.getUsers);
router.get('/:id', user_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('email', 'el email no es valido').isEmail(),
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').notEmpty(),
    (0, express_validator_1.check)('password', 'el password debe ser de al menos 8 caracteres').isLength({ min: 8 }),
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
    validate_fields_1.default
], user_1.postUser);
router.put('/:id', user_1.putUser);
router.delete('/:id', user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=usuario.js.map