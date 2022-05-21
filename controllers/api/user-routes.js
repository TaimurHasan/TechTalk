const { User } = require('../../models');
const sequelize = require('../../config/connection')
const router = require('express').Router();

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// get one user
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'There is no user with that id!' });
            return;
        };

        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// add a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        // to add session data

        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// login a user
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with that username!'});
            return;
        };

        const validPassword = dbUserData.checkPassword(req.body.password);
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        // add session data

        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
})


// update user information
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// delete a user

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'There is no user with that id!' });
            return;
        }

        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
})

module.exports = router;