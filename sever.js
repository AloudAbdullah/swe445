// Importing dependencies
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const config = require('./config');
const admin = require('./admin');


// Adding Routes
const login = require('./routes/login');
const registration = require('./routes/registration');
const index = require('./routes/index');
const homePage = require('./routes/homePage');


// Defining the port
var port = process.env.PORT

// instantiating the app
const app = express()

// Setting the view engine
app.set('view engine', 'ejs')
app.engine("html", require("ejs").renderFile)

// Defining the statics (css, js, imgs ... etc) public folder
app.use(express.static('views'));

// Giving the server access to user input
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// for logging everything in the terminal
app.use(logger('dev'))

app.use(session({
    secret: 'swe445_app$#1765$%',
    resave: true,
    saveUninitialized: true
}))

// Using routes

app.use('/homePage', homePage)
app.use('/index', index)
app.use('/login', login)
app.use('/registration', registration)



// Defining the routes
app.get('/', (req, res) => {
    res.render('index')
})

// Making the app listinig for any request
app.listen(port, function(){
    console.log('App is running http://localhost:' + port)
})