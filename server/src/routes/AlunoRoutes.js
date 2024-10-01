import {Router} from 'express';
import AlunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

router.get("/", AlunoController.index);
router.get("/show/:id", AlunoController.show);
router.post("/create", loginRequired,AlunoController.store);
router.put("/update/:id", loginRequired, AlunoController.update);
router.delete("/delete/:id", loginRequired,AlunoController.delete);

export default router;