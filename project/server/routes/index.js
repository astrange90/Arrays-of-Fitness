const router = require('express').Router();
const workoutRoutes = require('./workout-routes');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;