import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Element } from 'react-scroll';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
import Header from './components/Header';
import Trainer from './components/Trainer';
import Contact from './components/Contact';
import Info from './components/Info';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SavedWorkouts from './components/SavedWorkouts';
import LoggedIn from './components/LoggedIn';
import NewEntry from './components/NewEntry';
import auth from './utils/auth';

export default function App() {
  return (
    <ApolloProvider client={client}>
      {/* {auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/newentry'>
                    New Entry 
                  </Nav.Link>
                  <Nav.Link as={Link} to='/savedworkout'>Saved Workouts</Nav.Link>
                  <Nav.Link onClick={auth.logout} as={Link} to='/'>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )} */}
        < BrowserRouter >
        <div>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<Info />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/loggedin" element={<LoggedIn />} />
            <Route path="/savedworkout" element={<SavedWorkouts />} />
            <Route path="/newentry" element={<NewEntry />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ApolloProvider >
  );
}

function Home() {
  return (
    <React.Fragment>
      <Element name="trainer">
        <Trainer />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="info">
        <Info />
      </Element>
    </React.Fragment>
  );
}
