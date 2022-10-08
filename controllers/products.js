const Products = require('../models/products')
const index = (req, res) => {
    const products = Products.all()
    res.render('views/products/index', { products})
}

const form = (req, res) => {
    res.send('Products.form')
}

const show = (req, res) => {
    const product = Products.find(req.params.id)
    res.render('views/products/show', { product })
}

const create = (req, res) => {
    const product = Products.create(req.body)
    res.json(product)
}

const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.json(product)
}

const remove = (req, res) => {
    const product = Products.remove(req.params.id)
    res.json(product)
}




module.exports = {
    index,
    form,
    show,
    create,
    update,
    remove
}

