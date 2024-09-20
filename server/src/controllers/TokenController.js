class TokenController {
    async index(req,res) { //porque vamos criar ent é store e vai ser um método post
        res.json("TOKEN FUNCIONANDO!");
    }
}

export default new TokenController();