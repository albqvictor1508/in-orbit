"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _UserModel = require('../models/UserModel');

exports. default = async (req,res, next)  => {
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).json({
        errors: [
            "Login required",
        ]
    })
    
    const [,token] = authorization.split(' '); //destructuring da string separada por espaço.

    try {
        const data = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
        const {id , email} = data;

        const user = await _UserModel.User.findOne({
            where: {
                id,
                email,
            }
        })

        if(!user) {
            return res.status(401).json({
                errors: ["Invalid user"]
            })
        }

        req.userId = id;
        req.userEmail = email;
        return next();
    } catch(e) {
        console.log(e);
        return res.status(401).json({
            errors: [
                "Token expired or invalid",
            ]
        })
    }
}

/*
    req.userId = id;
    req.userEmail = email;

    Óbvio mas só pra recapitular que o req e o res são objetos, então você pode criar chaves e atribuir valores, pois os dados que foram capturados nesse middleware não podem ser acessados no body da requisição do UserController, ent salvei eles em outra chave para que pudesse fazer isso.
*/ 