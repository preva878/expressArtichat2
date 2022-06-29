const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 8585
//server


const app = express()
app.use(express.json())
app.use(express.static('Images'));
app.use(express.urlencoded({ extended: true }))
app.use( (req, res, next) => { 
    res.header( "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept" ) 
    next();
 }) 
 
 // utilisation du cors pour autoriser toute les origine de connexionx au serveur
 app.use(cors())
 // les routes
 const router = require('./Routes/allroutes')
 app.use('/api',router)

//static Images Folder

app.use('/Images', express.static('./Images'))

app.options((req,res,next) =>{
    res.end()
})
app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field)
    next(err)
  })
app.listen(PORT,() => {
    console.log(`server actif sur le port : ${PORT}`)
})
