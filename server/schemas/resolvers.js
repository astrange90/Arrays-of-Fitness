const { Workout, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    workouts: async () => {
      // Get and return all documents from the classes collection
      return await Workout.find({})
    
    },
    me: async(parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedExercise');
      }
      throw AuthenticationError;
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password, age, height, weight }) => {
      const user = await User.create({ username, email, password, age, height, weight });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addWorkout: async (parent, { day }, context) => {
      if (context.user) {
        const workout = await Workout.create({
          day,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedExercise: workout._id } }
        );

        return workout;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    
  }
};

module.exports = resolvers;
