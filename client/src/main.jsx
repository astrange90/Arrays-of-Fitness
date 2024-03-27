import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client instead of react-dom
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './utils/apollo';
import App from './App';

const client = createApolloClient();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
