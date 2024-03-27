import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Element } from 'react-scroll';
import Header from './components/Header';
import WhyUs from './components/WhyUs';
import Health from './components/Health';
import Trainer from './components/Trainer';
import Contact from './components/Contact';
import Info from './components/Info';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage'; 
import SignupPage from './components/SignupPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes> 
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<Info />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <React.Fragment> 
      <Element name="whyUs">
        <WhyUs />
      </Element>
      <Element name="health">
        <Health />
      </Element>
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
