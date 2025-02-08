// Configuração do controller

const User = require('../models/Users')
const mongoose = require('mongoose')
const ut = require('../utils/Utilities')


// Funcão para consultar todos usuários
const getUsers = async (req, res) => {
    
        try {

            const{name, age, sort} = req.query
            const filters = {}

        if(name){
            filters.name = { $regex: name, $options: 'i'}
        }

        if(age){
            filters.age = age
        }

        const sortOrder = sort ? sort.split(',').join(' '): 'createdAt'

            const users = await User.find(filters).sort(sortOrder)      
            if(name && users.length === 0){
                return res.status(404).json({message: 'Nenhum usuário com a inicial foi encontrado'})
            }      
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({message: error.message})
        }    
}

// Funcao para consultar usuário pelo id
const getUser = async (req, res) => {
    
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'ID inválido'})
        }

        const user = await User.findById(id)        
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// funcao para adicionar usuário
const addUser = async (req, res) => {
    try{
        if('user_password' in req.body){
            req.body['user_password'] = await ut.sha256(req.body['user_password'])
        }
        const user = await User.create(req.body)
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// Funcao para atualizar usuário
const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message: 'ID inválido'})            
            return
        }
               
        if('new_password' in req.body){
            const cmp = await cmpUserPassword(id, req.body['user_password'])
            if(!cmp){
                res.status(400).json({message: 'A senha é necessária'})
                return                        
            }
            req.body['user_password'] = await ut.sha256(req.body['new_password'])
        }

        const user = await User.findByIdAndUpdate(id, req.body, {new: true})           
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Funcao para deletar usuário
const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message: 'ID inválido'})
        }
        const user = await User.findByIdAndDelete(id)        
        res.status(200).json({message: 'Usuário deletado com sucesso'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Funcao para comparar senha do usuário
const cmpUserPassword = async function(id, password){
    const inputSHA = await ut.sha256(password)    
    try {
      const user = await User.findById(id)
      if(!user.user_password){
        return true;
      }      
      return (user.user_password === inputSHA)            
    } catch (error) {
      return false;      
    }
}


module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}