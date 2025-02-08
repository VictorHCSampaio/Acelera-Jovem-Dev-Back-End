// Conexão com o banco de dados

const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/Users')
const userRoute = require('./routes/user.route')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', userRoute)


mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Conectado ao banco de dados')
    app.listen(8080, () => {
        console.log('Olá')
    })
})
.catch(() => {
    console.log('Conexão falhou')
})

