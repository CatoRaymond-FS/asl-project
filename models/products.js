let products = [
    {id: "1", "slug" : "nike-shoes", "name": "Nike Shoes", "price": 100, "description": "Nike Shoes"},
]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p.id === id)
}

const create = (product) => {
    products.push(product)
    return products
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
}

module.exports = {
    all,
    find,
    create,
    update,
    remove
}
