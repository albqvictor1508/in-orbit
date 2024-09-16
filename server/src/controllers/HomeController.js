class HomeController {
    index(req,res) {
        res.json({
            alexsa: 'te amo muito'
        })
    }
}

export default new HomeController();