const express = require("express");
const router = express.Router();
const { createItem, getItems,getItem } = require("../controllers/storage")
const { validatorCreateItem, validatorGetItem, validatorGetRol } = require("../validators/tracks")


const uploadMiddleware = require("../utils/handleStorage");


router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)
router.post("/", uploadMiddleware.single("image"),createItem)
router.get("/", uploadMiddleware.single("image"),getItems)


module.exports = router;