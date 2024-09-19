import Sequelize, { Model } from 'sequelize';


export class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            idade: Sequelize.INTEGER,
            email: Sequelize.STRING,
            turno: Sequelize.STRING,
        }, {sequelize})

        return this;
    }
}

