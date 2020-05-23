const { Product } = require('../Models/Product')

module.exports = {

    async store(req, res) {
        
        try {
            
            const {
                name,
                price,
                description
            } = req.body;
    
            if(!name || !price) {
                return res.status(400).json({
                    error: "Invalid info."
                })
            }

            await Product.create({
                name,
                price,
                description
            })

            return res.status(202).json({
                success: 'Products created.'
            })

        } catch (error) {
            return res.status(500).json(error)
        }
    },

    async index (req, res) {
        try 
        {
            const products = await Product.find();
            return res.status(200).json(products);

        }
        catch(err)
        {
            return res.status(500).json({
                error: "Nenhum produto encontrado"
            })
        }
    },

    async Show(req, res) {
        const { id } = req.query;

        if(!id)
         {
            return res.status(404).json({
                error: "Bad query"
            })
        }

        const product = await Product.findById(id);
        res.status(200).json(product);
    },

    async remove(req, res) {
        const {id} = req.query;

        if(!id) 
        {
            return res.status(400).json({
                error: "Bad Query"
            })
        }

        const product = await Product.findByIdAndDelete(id)

        return res.status(200).json({
            success: "Deletado com sucesso"
        })
    },

    async putProducts(req, res) {
        const { id } = req.query;

        if(!id)
        {
            return res.status(400).json({
                error: "Não encontrado"
            })
        }
        
        await Product.findByIdAndUpdate(id, req.body);

        return res.status(200).json({
            success: "Atualizado com Sucesso"
        })
    }

}