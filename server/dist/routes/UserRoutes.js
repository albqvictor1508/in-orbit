"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
const router = new (0, _express.Router)();

//não deveriam existir, mas por enquanto vou manter para ter exemplo de CRUD
router.get("/", _userController2.default.index);
router.post("/create", _userController2.default.store);

router.get("/show/:id", _userController2.default.show);
router.put("/update/", _loginRequired2.default, _userController2.default.update);
router.delete("/delete/", _loginRequired2.default, _userController2.default.delete);

exports. default = router;
