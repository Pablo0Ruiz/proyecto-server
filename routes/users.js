const express = require("express")
const { getItems, getItem, createItem, updateItem, deleteItem, updateRol } = require("../controllers/users");
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const { validatorCreateItem, validatorGetItem, validatorGetRol } = require("../validators/tracks")
const {validatorMail} = require("../validators/Mail")
const {send} = require("../controllers/mail")
const router = express.Router()


router.post("/mail",authMiddleware,validatorMail,send)

/**
 * @openapi
 * /api/users:
 *  get:
 *    tags:
 *    - User
 *    summary: Get all users
 *    description: Retrieve a list of all users
 *    responses:
 *      '200':
 *        description: Returns the list of users
 *      '401':
 *        description: Unauthorized
 */
router.get('/', authMiddleware, getItems)

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *    tags:
 *    - User
 *    summary: Get in users
 *    description: Retrieve a list of all users
 *    parameters:
 *          -   name: id
 *              in: path
 *              description: id that need to be updated
 *              required: true
 *              schema:
 *                  type: string
 *    responses:
 *      '200':
 *        description: Returns the list of users
 *      '401':
 *        description: Unauthorized
 */
router.get('/:id', authMiddleware, validatorGetItem, getItem)

/**
 * @openapi
 * /api/users:
 *  post:
 *    tags:
 *    - User
 *    summary: Get all users
 *    description: Retrieve a list of all users
 *    requestbody:
 *       countent:
 *            application/json:
 *                    schema:
 *                      $ref: "#/components/schemas/users"              
 *    responses:
 *      '200':
 *        description: Returns the list of users
 *      '401':
 *        description: Unauthorized
 */
router.post("/", authMiddleware, checkRol(["user", "admin"]), validatorCreateItem, createItem)
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem)
router.patch("/role/:id", authMiddleware, checkRol(["admin"]), validatorGetItem, validatorGetRol, updateRol)
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem)

module.exports = router