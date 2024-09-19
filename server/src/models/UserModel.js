import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
export class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "O campo nome deve estar entre 3 a 255 caracteres."
                    },
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: "Email já existe"
                },
                validate: {
                    isEmail: {
                        msg: "Email inválido"
                    }
                }
            },

            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8,50],
                        msg: "O campo senha deve conter de 8 a 50 caracteres",
                    }
                }
            },

            password_hash: {
                type: Sequelize.STRING,
                defaultValue: ''
            }
        }, {sequelize})
        this.addHook('beforeSave',async user => {
            if(!user.password) return;
            user.password_hash = await bcryptjs.hash(user.password, 8);
        })

        return this;
    }
}

