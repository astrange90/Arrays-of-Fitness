const router = require('express').Router();
const {
  getWorkout
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/workouts').get(authMiddleware, getWorkout);

module.exports = router;