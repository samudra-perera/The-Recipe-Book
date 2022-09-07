const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const recipeRoutes = require('./routes/recipe') //The routes will use for all recipe functionality
const methodOverride = require('method-override') // For PUT method.

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
//app.disable('etag')

//Method override - For PUT method.
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/recipe', recipeRoutes) 
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    