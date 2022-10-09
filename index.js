//use express
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
//use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/products')
//use twig
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render('home', { name: 'World!', 'users': [
        { name: 'Reya Faye', email: 'FReya98@gmail.com' },
        { name: 'Raymond Cato', email: 'catoraymond@gmail.com' },
        { name: 'California', email: 'california98@gmail.com' }
    ] })
})


app.use('/products', productRouter)


app.listen(3000)