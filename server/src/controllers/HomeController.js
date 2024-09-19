import { Aluno } from "../models/AlunoModel";

class HomeController {
    async index(req,res) {
        const novoAluno = await Aluno.create({
            nome: 'vito',
            sobrenome: 'marido de alexsa',
            idade: 17,
            email: "albq.victor@gmail.com",
            turno: "matutino"
        })
        res.json(novoAluno);
    }
}

export default new HomeController();