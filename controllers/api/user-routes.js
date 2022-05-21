const { User } = require('../../models');
const sequelize = require('../../config/connection')
const router = require('express').Router();

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exlcude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
})

module.exports = router;