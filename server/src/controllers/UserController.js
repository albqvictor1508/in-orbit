import { User } from "../models/UserModel";

class UserController {
    async store(req,res) {
        try {
            const novoUser = await User.create(req.body)
            return res.status(200).json(novoUser);
        } catch(e) {
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            }); //como a arrow function ta dessa forma, ja ta retornando a msg
        } 
    }

    async index(req,res) {
        try {
            const users = await User.findAll(); // SELECT * FROM users;
            return res.status(200).json(users)
        } catch(e) {
            return res.status(400).json(null);
        }
    }

    async show(req,res) {
        try {
            const findUser = await User.findByPk(req.params.id)
            return res.status(200).json(findUser);
        } catch (e) {
            return res.status(400).json(null);
        }
    }

    async update(req,res) { //junção do index com o show
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['ID not seended.']
                })
            }

            const user = await User.findByPk(req.params.id);

            if(!user) {
                return res.status(400).json({
                    errors: ['User not exists.']
                })
            }

            const newData = await user.update(req.body);
            return res.json({
                msg: "successfully updated!",
                newUser: newData
            });
        } catch(e) {
            return res.status(400).json(null);
        }
        
    }

    async delete(req, res) {
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['ID not seended.']
                });
            }

            const user = await User.findByPk(req.params.id);

            if(!user) {
                return res.status(400).json({
                    errors: ['User not finded.']
                })
            }

            await user.destroy();
            return res.json({
                msg: "successfully removed.",
                removed: user
            })
        } catch(e) {
            return res.status(400).json(null);
        }
    }
}

export default new UserController();