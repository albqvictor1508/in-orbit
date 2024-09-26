import {Router} from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

//não deveriam existir, mas por enquanto vou manter para ter exemplo de CRUD
router.get("/", userController.index);
router.post("/create", userController.store);


router.get("/show/:id", userController.show);
router.put("/update/",loginRequired ,userController.update);
router.delete("/delete/", loginRequired, userController.delete);

export default router;