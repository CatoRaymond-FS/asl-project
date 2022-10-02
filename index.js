//use express
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
//use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/products')

app.use('/products', productRouter)


app.listen(3000)