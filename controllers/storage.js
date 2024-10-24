const { storageModel} = require("../models")
const fs = require("fs")

const getItem = async (req, res) => {
    try{
        const id = req.params.id
        const data = await usersModel.findById(id)
        res.send({data})
    }catch(err){
        res.send("ocurrio un error",err)
    }
}

const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send({data})
}

const createItem = async (req, res) =>{
    const { body,file } = req
    const fileData = {
        filename : file.filename,
        url : process.env.PUBLIC_URL +"/"+file.filename
    }
    const data =await storageModel.create(fileData)
    res.send(data)
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

module.exports = {createItem, getItems,getItem,updateItem,deleteItem,updateRol};