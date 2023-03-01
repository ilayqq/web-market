const Router = require('express').Router;
const userContorller = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max:32}),
    userContorller.registration
);
router.post('/login', userContorller.login);
router.post('/logout', userContorller.logout);
router.get('/activate/:link', userContorller.activate);
router.get('/refresh', userContorller.refresh);
router.get('/users', authMiddleware, userContorller.getUsers); 

module.exports = router