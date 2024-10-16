"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
const router = new (0, _express.Router)();

router.get("/", _AlunoController2.default.index);
router.get("/show/:id", _AlunoController2.default.show);
router.post("/create", _loginRequired2.default,_AlunoController2.default.store);
router.put("/update/:id", _loginRequired2.default, _AlunoController2.default.update);
router.delete("/delete/:id", _loginRequired2.default,_AlunoController2.default.delete);

exports. default = router;