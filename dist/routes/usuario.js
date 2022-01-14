"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
const router = (0, express_1.Router)();
router.get('/', usuariosController_1.getUsuarios);
router.get('/:id', usuariosController_1.getUsuario);
router.post('/', usuariosController_1.postUsuario);
router.put('/:id', usuariosController_1.putUsuario);
router.delete('/:id', usuariosController_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map