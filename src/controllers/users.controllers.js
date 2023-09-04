const catchError = require('../utils/catchError');
const User = require('../models/Users');


//el metodo get que trae todos los usuarios
const getAll = catchError(async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

// metodo post que postea nuevos usuarios
const create = catchError(async (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday
    });
    return res.status(201).json(user);
});

// megtodo get que solo trae un solo usuario
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
})

// metodo delete para eliminar usuarios
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.sendStatus(204);
})

// metodo uodate para actualizar usuarios
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.update({
        first_name,
        last_name,
        email,
        password,
        birthday,
    }, { where: { id }, returning: true });
    return res.json(user);
})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}











