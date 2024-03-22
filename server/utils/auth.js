const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');
// set token secret and expiration date
const secret = 'TheSecretTokenIs...';
const expiration = '4h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  
  signToken: function ({ username, email, age, height, weight, _id }) {
    const payload = { username, email, age, height, weight, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};