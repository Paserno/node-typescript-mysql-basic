import { Router } from 'express';
import { getUsuario,
         getUsuarios,
         postUsuario,
         putUsuario,
         deleteUsuario } from '../controllers/usuariosController';

const router = Router();


router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);




export default router;