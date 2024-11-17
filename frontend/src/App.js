import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import VaishPage from './Vaish/page'; // Import VaishPage component
import SahasPage from './Sahas/page'; // Import SahasPage component
import Callback from './Callback/page';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import CreateAcc from "./CreateAcc/page";
import Investment from "./Investment/page"
function App() {
  return (
    <Auth0Provider
      domain='dev-uxvqv76aqmsy3fyj.us.auth0.com'
      clientId='GsemPsspJAiSO2PDgWX07dhXgI3OG0vT'
      cacheLocation='localstorage'
      authorizationParams={
        {
          audience:'clearway',
          redirect_uri: 'http://localhost:3000/callback'
        }
      }
    >
      <Router> {/* Wrap the entire app with Router */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customer" element={<VaishPage />} /> {/* Route for Vaish's page */}
          <Route path="/employee" element={<SahasPage />} /> {/* Route for Sahas's page */}
          <Route path="/callback" element={<Callback />} />
          <Route path="/customer/signup" element = {<CreateAcc />} />
          <Route path="/investment" element = {<Investment />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

function LandingPage() {

  const {loginWithRedirect} = useAuth0();
  const handleGetStarted = () => {
    loginWithRedirect();
  };

  return (
    <div className="hero min-h-screen bg-[url('wlcome.jpg')] bg-cover bg-center">
      <div className="hero-content text-center flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="font-bold">ClearWay</span>
        </h1>
        <p className="py-4 max-w-lg text-lg">
          Streamline your path to success with ClearWay. Discover tools and services designed to help you navigate effortlessly.
        </p>
        <button
          className="btn btn-primary px-6 py-3 text-lg font-medium"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}


export default App;
