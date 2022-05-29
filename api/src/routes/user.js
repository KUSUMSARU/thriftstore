const express = require('express');
const { signup, signin, signout } = require('../../controller/admin/auth');
const router = express.Router();


router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);


module.exports = router;