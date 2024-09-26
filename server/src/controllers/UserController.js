import { password } from "../config/database";
import { User } from "../models/UserModel";

class UserController {
    async store(req,res) {
        try {
            const novoUser = await User.create(req.body);
            const {id,nome,email, password} = novoUser;

            return res.status(200).json({
                msg: "Successfully created!",
                newUser: {
                    id,
                    nome,
                    email,
                    password
                }
            });
        } catch(e) {
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            }); //como a arrow function ta dessa forma, ja ta retornando a msg
        } 
    }

    async index(req,res) {
        try {
            const users = await User.findAll({attributes: ['id', 'nome', 'email']});
            return res.status(200).json(users)
        } catch(e) {
            return res.status(400).json(null);
        }
    }

    async show(req,res) {
        try {
            const findUser = await User.findByPk(req.params.id);

            const {email, nome, id} = findUser;
            return res.status(200).json({
                id,
                nome,
                email
            });
        } catch (e) {
            return res.status(400).json(null);
        }
    }

    async update(req,res) { //junção do index com o show
        try {
            const user = await User.findByPk(req.userId);

            if(!user) {
                return res.status(400).json({
                    errors: ['User not exists.']
                })
            }

            const newData = await user.update(req.body);
            const {id, nome, email} = newData;
            return res.json({
                msg: "successfully updated!",
                newUser: {
                    id,
                    nome,
                    email
                }
            });
        } catch(e) {
            return res.status(400).json(null);
        }
        
    }

    async delete(req, res) {
        try {
            const user = await User.findByPk(req.userId);

            if(!user) {
                return res.status(400).json({
                    errors: ['User not finded.']
                })
            }

            const {id, nome, email} = user;
            await user.destroy();
            return res.json({
                msg: "successfully removed.",
                removed: {
                    id,
                    nome,
                    email
                }
            })
        } catch(e) {
            return res.status(400).json(null);
        }
    }
}

export default new UserController();