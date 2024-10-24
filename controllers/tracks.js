const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")
const { matchedData } = require('express-validator')


const getItems = async (req, res) => {
    try {
        const user = req.user
        const data = await tracksModel.find({})
        res.send({ data ,user })
    } catch (err) {
        handleHttpError(res, ' ERROR_GET_ITEMS', 403)
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await tracksModel.findById(id)
        res.send(data)
    } catch (err) {
        console.log("error", err)
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (err) {
        handleHttpError(res, ' ERROR_GET_ITEMS')
    }
}

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await tracksModel.findByIdAndUpdate(id, body, { new: true })
        res.send(data)
    } catch (err) {
        console.log("error", err)
        handleHttpError(res, "error")
    }
}
//borrado fisico, no se recupera
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await tracksModel.deleteOne({_id:id})
        res.send(data)
    } catch (err) {
        console.log("error", err)
    }
}

//borrado logico, se borra pero se recupera
const deleteItemLogico = async (req, res) => {
    try {
        const { id } = matchedData(req)
        console.log(id)
        const data = await tracksModel.delete({_id:id})
        res.send(data)
    } catch (err) {
        console.log("error", err)
    }
}
module.exports = {
    getItems, getItem,

    createItem, updateItem,

    deleteItem,deleteItemLogico
};

