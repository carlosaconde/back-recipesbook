"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controller/auth");
const router = (0, express_1.Router)();
router.post("/login", [(0, express_validator_1.check)("email", "el correo es obligatorio")], auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map