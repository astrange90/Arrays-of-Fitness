// apollo.js

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: 'your_graphql_endpoint_uri',
    cache: new InMemoryCache(),
  });
};
