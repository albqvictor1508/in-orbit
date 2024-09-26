import Sequelize, { Model } from 'sequelize';


export class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3,255],
                        msg: "Name must be between 3 and 255 characters"
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3,255],
                        msg: "Surname must be between 3 and 255 characters"
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: "Age must be a integer"
                    },
                    len: {
                        args: [1,3],
                        msg: "Age must be between 1 and 3 characters"
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: "Invalid email"
                    }
                }
            },
            turno: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 20],
                        msg: "Invalid turn"
                    }
                }
            }
        }, {sequelize})

        return this;
    }
}

