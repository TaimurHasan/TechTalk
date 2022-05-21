const router = require('express').Router();
const { Post, User, Comment } = require('../models')

router.get('/', (req, res) => {
    // find all posts to display on home page
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            }
        ]
    })
    .then(dbPostData => {
        // serialize post data
        const posts = dbPostData.map(post => post.get({ plain: true }))

        // render homepage handlebars template with posts
        res.render('homepage', { posts })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});

router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('signup');
});
module.exports = router;