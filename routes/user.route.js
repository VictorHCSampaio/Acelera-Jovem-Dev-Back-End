// Configuração do router

const express = require('express')
const User = require('../models/Users')
const router = express.Router()
const {getUsers, getUser, addUser, updateUser, deleteUser} = require('../Controller/userController')

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/add', addUser)

router.put('/update/:id', updateUser)

router.delete('/delete/:id', deleteUser)


module.exports = router