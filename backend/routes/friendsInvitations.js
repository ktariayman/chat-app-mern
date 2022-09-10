const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const {postFriendInvitation   } = require('../helper/valid');
const verifyToken = require("../middleware/auth")
const friendInvitations = require('../controllers/friendInvitation/friendInvitation');


router.post('/invite' ,verifyToken, validator.body(postFriendInvitation) , friendInvitations.controllers.invite)

module.exports = router;