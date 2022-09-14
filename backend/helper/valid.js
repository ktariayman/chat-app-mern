
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

const postFriendInvitation = Joi.object({
    email : Joi.string().email()
})
const inviteDecisionSchema = Joi.object({
    id : Joi.string().required()
})

module.exports = {registerValidator , LoginValidator , postFriendInvitation, inviteDecisionSchema}