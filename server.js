const express = require("express");
const exphbs  = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');


const app = express();
require('./public/js/database')
require('./public/js/local-auth');

app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
})); 
app.set('view engine', 'handlebars'); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))




//load productModel
const productModel = require("./models/product");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//routes


//home route
app.get("/",(req,res)=>{

    res.render("general/index",{
        tittle: "Home Page"
    });
});

//about us route
app.get("/about",(req,res)=>{ 
    res.render("general/about",{ 
        title: "About Us", 
        description: "About to Joy BB" 
    }) 
});

//show all products
app.get("/find",(req,res)=>{ 
    res.render("general/finding",{ 
        title: "Find a Home", 
        description: "Find a Home in JoyBB",
        products: productModel.getAllProducts() 
    }) 
});

//register route
app.get("/register",(req,res)=>{ 
    res.render("general/register",{ 
        title: "Log In ", 
        description: "Register" 
    }) 
});


//process register 
app.post("/register", passport.authenticate('local-register', {
    successRedirect: '/',
    failureRedirect: '/register',
    passReqToCallback: true
}));


//login route
app.get("/login",(req,res)=>{

    res.render("general/login",{
        tittle: "Login Page"
    });
});

//when user login 
app.post("/login",(req,res)=>{

    res.render()
});

app.get('/profile', (req, res, next) => {
    res.render('general/profile');
});



//sets up server
app.set ('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log('Web sever is up and running', app.get('port'));
});
