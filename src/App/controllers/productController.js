// product controller file

module.exports = {

    async store(req, res) {
        
        try {
        
            // getting properties
            const {
                name,
                price,
                description
            } = req.body
    
            // validating fields
            if (!name || !price) {
                return res.status(400).json({
                    error: 'Name and price required.'
                })
            }
    
            // creating the product
            return res.status(202).json({
                success: 'Product created.'
            })
    
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}