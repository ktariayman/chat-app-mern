
const Joi = require('joi');

const registerValidator = Joi.object({
    username : Joi.string().min(3).max(12).required(),
    password : Joi.string().min(8).max(12).required(),
    email : Joi.string().email().required()
})
const LoginValidator = Joi.object({
    password : Joi.string().min(8).max(12).required(),
    email : Joi.string().email().required()
})
module.exports = {registerValidator , LoginValidator}