import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import VaishPage from './Vaish/page'; // Import VaishPage component
import SahasPage from './Sahas/page'; // Import SahasPage component

function App() {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Vaish/page" element={<VaishPage />} /> {/* Route for Vaish's page */}
        <Route path="/Sahas/page" element={<SahasPage />} /> {/* Route for Sahas's page */}
      </Routes>
    </Router>
  );
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // This hook works only inside Router

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "Vaish@g") {
      navigate('/Vaish/page'); // Navigate to Vaish's page
    } else if (email === "Sahas@g") {
      navigate('/Sahas/page'); // Navigate to Sahas's page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="hero min-h-screen bg-[url('wlcome.jpg')] bg-cover bg-center">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left lg:w-3/5">
          <div className='flex'>
            <h1 className="text-5xl my-9 font-bold">Welcome to </h1>
            <h1 className="text-8xl px-3 font-bold"> ClearWay</h1>
          </div>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-1/3">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
