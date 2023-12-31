// Login.js
import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import './Login.css'; // Import the corresponding CSS file
import { Route, renderMatches, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

  const Login = () => {
  const { token,setToken } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // console.log(username)
    // console.log(password)
    try {
      const response =await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username,
          password,
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then((data) =>{
        if(data.token!=null){
          setToken(data.token)
          navigate("/")
        }
        else setError('Invalid username or password');
      });
    } catch (error) {
      setError('Invalid username or password');
    }
  };
  return (
    <div>
    <div className="login-container">
      <div className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Login;
