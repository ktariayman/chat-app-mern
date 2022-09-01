const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth/auth');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const { registerValidator, LoginValidator } = require('../helper/valid');
const verifyToken = require("../middleware/auth")



router.post('/register',validator.body(registerValidator), auth.controllers.register)
router.post('/login',validator.body(LoginValidator) , auth.controllers.login)
router.get('/token',verifyToken , (req, res) => {
    res.send("token")    
}
    )

module.exports = router;