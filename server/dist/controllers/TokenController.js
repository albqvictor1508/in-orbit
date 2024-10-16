"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UserModel = require('../models/UserModel');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
    async store(req,res) { //porque vamos criar ent é store e vai ser um método post
        const {email = '', password = ''} = req.body;

        if(!email || !password) return res.status(401).json({
            errors: [
                "Invalid credentials",
            ]
        })

        const user = await _UserModel.User.findOne({where:{email} })

        if(!user) return res.status(401).json({
            errors: [
                "User not finded",
            ]
        })

        const passwordValidate = await _bcryptjs2.default.compare(password, user.password_hash);

        if(!passwordValidate) return res.status(401).json({
            errors: [
                "Invalid password.",
            ]
        })
        const { id } = user; //destructuring do id do usuário que passar da validação para mandar pro jwt
        const token = _jsonwebtoken2.default.sign({id, email}, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_EXPIRATION});

        return res.json({
            token,  
        });
    }
}

exports. default = new TokenController();

/*
const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_EXPIRATION});

O jwt necessita de 3 argumentos a serem passados para o reconhecimento do usuário e criação do seu token

1 -> payload: significa os valores que serão utilizados para identificar o usuário, nesse caso o id e o email pois são unicos de cada usuário,

2 -> secretOrPrivateKey -> você pode enviar tanto o secret(tipo uma senha qualquer), quanto a private key, no caso utilizei o secret

3 -> options -> É opicional, onde pode mandar mais configs adicionais para o funcionamento do token, no caso só mandei o tempo de validade desse token, que quando acabar o prazo ele se torna inválido e outro precisa ser criado (manda o usuário logar dnv).
*/