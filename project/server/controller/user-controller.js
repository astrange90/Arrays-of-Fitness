// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their username
  async getUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'User not found with this id.' });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'There was an error!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back to client
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Invalid Password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  }
};