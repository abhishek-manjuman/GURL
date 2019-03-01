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

app.post('/', function(req, res){
    //send back a page with the name of the user on it
    var userid= req.body.adminLoginUserid
    var pass= req.body.adminLoginPass
    res.render('admindashboard.ejs', { userid : userid, pass : pass })
    
})
app.post('/admindashboard.ejs', function(req, res){
    //send back a page with the name of the user on it
    res.render('admin.ejs')
    
})
// Create predefine port number 
//First part accesss the envirnment port autometicaly if it is free
//Other wise its use 3000
const port = process.env.PORT || 3000

// It is a method to connet to the server
app.listen(port, function(){
    console.log('App running on port '+port)
})
