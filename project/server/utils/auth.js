const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'TheSecretTokenIs...';
const expiration = '4h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ username, email, age, height, weight, _id }) {
    const payload = { username, email, age, height, weight, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};