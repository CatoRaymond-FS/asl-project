//use express
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
//use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/products')
const variantsRouter = require('./routes/variants')
const imagesRouter = require('./routes/images')

//use twig
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render('views/home')
})


app.use('/products', productRouter)
app.use('/variants', variantsRouter)
app.use('/images', imagesRouter)


app.listen(3000)