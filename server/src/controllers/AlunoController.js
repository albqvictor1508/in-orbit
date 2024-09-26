import { Aluno } from "../models/AlunoModel";

class AlunoController {
    async index(req,res) {
        try {
            const alunos = await Aluno.findAll();
            res.status(200).json(alunos);
        } catch(e) {
            console.log(e)
            return res.status(400).json({
                errors: ["Internal error, please check the logs"]
            })
        }
    }

    async store(req,res) {
        try {            
            const student  = await Aluno.create(req.body);
            const {id,nome, sobrenome, idade, email, turno} = student;
            return res.status(200).json({
                msg: "Sucessfully created",
                newStudent: {
                    id,
                    nome,
                    sobrenome,
                    idade,
                    email,
                    turno
                }
            })
        } catch(e) {
            console.log(e);
            return res.status(400).json({
                errors: e.errors.map(error => error.message),
            })
        }
    }
    async show(req,res) {
        try {
            const {id} = req.params;
            const student = await Aluno.findByPk(id);

            if(!student) {
                return res.status(401).json({
                    errors: ["Student not exist"]
                })
            }

            return res.status(200).json({
                msg: "Student finded!",
                student,
            })
        } catch(e) {
            console.log(e)
            return res.status(400).json({
                errors: ["Internal error, please check the logs"]
            })
        }
    }
    async update(req,res) {
        const student = await Aluno.findByPk(req.params.id);

        if(!student) {
            return res.status(400).json({
                errors: ["Student not exist"]
            });
        }

        const newStudent = await student.update(req.body);
        return res.status(200).json({
            msg: "Successfully updated",
            newStudent: newStudent
        })
    }
    async delete(req,res) {
        const student = await Aluno.findByPk(req.params.id);

        if(!student) {
            return res.status(401).json({
                errors: ["Student not exist"]
            })
        }
        await student.destroy();
        return res.status(200).json({
            msg: "Student deleted!",
            student
        })
    }
}

//CRUDZINHO BÁSICO DE ALUNO SEM O MIDDLEWARE DE LOGIN REQUIRED

export default new AlunoController();