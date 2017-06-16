
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport');
const Strategy = require('passport-local').Strategy
const api = require('./controllers/userController')

app.use(cors())
// mongodb://oscarhermawan:neogaming17@neogaming-shard-00-00-zkd0y.mongodb.net:27017,neogaming-shard-00-01-zkd0y.mongodb.net:27017,neogaming-shard-00-02-zkd0y.mongodb.net:27017/NeoGaming?ssl=true&replicaSet=NeoGaming-shard-0&authSource=admin
mongoose.connect('mongodb://localhost/try-something-cool', (err)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Connection Success');
  }
})
const users = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

passport.use(new Strategy(api.signIn))
app.use(passport.initialize())

app.use('/users', users)

app.listen(3000)
module.exports = app
