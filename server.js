const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

// Create a new application using express framework
// Instance of Express app
const app = express()

//we want to serve js and html in ejs
app.set('view engine', 'ejs')

//we also want to add css and other static file
app.use(express.static('views'))
app.set('views', __dirname+'/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Its return the logger of an devloping application 
app.use(logger('dev'))

app.get('/', function(req, res){
    res.render('index.ejs')
})

// Create predefine port number 
//First part accesss the envirnment port autometicaly if it is free
//Other wise its use 3000
const port = process.env.PORT || 3000

// It is a method to connet to the server
app.listen(port, function(){
    console.log('App running on port '+port)
})
