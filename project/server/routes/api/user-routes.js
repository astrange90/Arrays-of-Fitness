const router = require('express').Router();
const {
  createUser,
  getUser,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser);

router.route('/login').post(login);

router.route('/user').get(authMiddleware, getUser);

module.exports = router;