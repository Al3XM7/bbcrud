const express = require('express');
const router = express.Router();
const UsersRouters = require('./users.router');

// colocar las rutas aquí
router.use('/users', UsersRouters)

module.exports = router;