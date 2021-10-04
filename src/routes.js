const express = require("express");
const router = express.Router();
const mid = require("./middleware");

const userController = require("./Controller/UserController")
//const addressController = require("./Controller/AddressController")

router.get('/', (req, res) => res.status(200).send("REST Fullstack Challenge Running"));
router.get('/users/:limit?', mid, userController.selectUser);
router.get('/users/:id_user', mid, userController.selectUserById);
router.put('/users/:id_user', mid, userController.updateUser);
router.delete('/users/:id_user', mid, userController.deleteUser);

module.exports = router;