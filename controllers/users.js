const { matchedData } = require("express-validator")
const {usersModel} = require("../models")


const getItems = async (req, res) => {
    const data = await usersModel.find({})
    res.send({data})
}

const getItem = async (req, res) => {
    try{
        const id = req.params.id
        const data = await usersModel.findById(id)
        res.send({data})
    }catch(err){
        res.send("ocurrio un error",err)
    }
}

const createItem = async (req, res) => {
    try{
        const {body} = req
        const data = await usersModel.create(body) 
        res.send({data})
    } catch(err) {
        res.send("ocurrio un error", err)
    }
}

const updateItem = async (req, res) => {
    try{
        const id = req.params.id
        const {body} = req
        const data = await usersModel.findByIdAndUpdate(id,body, {new:true})
        res.send({data})
    }catch(err){
        res.send("ocurrio un error", err)
    }
}

const deleteItem = async(req, res) => {
    try{
        const id = req.params.id
        const eliminado= await usersModel.findByIdAndDelete(id)
        res.send("eliminado")
    }catch(err) {
        res.send("no se pudo", err)
    }
}

const updateRol = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await usersModel.findByIdAndUpdate(id, body, { new: true })
        res.send(data)
    } catch (err) {
        console.log("error", err)
        handleHttpError(res, "error")
    }
}

module.exports = { getItems, getItem,

createItem, updateItem,updateRol,

deleteItem};