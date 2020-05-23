module.exports = {
    async store(req, res) {
        const {
            name,
            price,
            description
        } = req.body;

        if(name === ''  || price === '') {
            return res.status(202).json({
                success : "Produto Criado"
            })
        }
        else {
            return res.status(404).json({
                error: "undefined"
            })
        }
    }
}