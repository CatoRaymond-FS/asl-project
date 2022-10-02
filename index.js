//use express
const express = require('express')
const app = express()


//GET /products/all HTTP/1.1
app.get('/products/all', (request, response) => {
    response.send(
        'GET Products: ' + request.query.page + ', ' + request.query.sort + ', ' + request.query.order
        )
})

//GET /products/8719 HTTP/1.1
app.get('/products/:productID', (request, response) => {
    response.send('GET Products: ' + request.params.productID)
})

//GET /products/8719-small-red HTTP/1.1
app.get('/products/:productID-:productSize-:productColor', (request, response) => {
    response.send(
        'GET Products: ' + request.params.productID + ', ' + request.params.productSize + ', ' + request.params.productColor
        )
})

app.listen(3000)


