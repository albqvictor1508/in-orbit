import {Router} from 'express';
import AlunoController from '../controllers/AlunoController';
const router = new Router();

router.get("/", AlunoController.index);
router.post("/create", AlunoController.store);
router.get("/show/:id", AlunoController.show);
router.put("/update/:id", AlunoController.update);
router.delete("/delete/:id", AlunoController.delete);
/*


*/

export default router;