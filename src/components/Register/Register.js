// RegistrationForm.jsx
import React, { useState } from 'react';
import './Register.css';
import { Link, Navigate } from 'react-router-dom';
// import Modal from 'react-modal';

const Register = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/v1/users/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      console.log(response.status==201)
      {
        handlePopup();
        setFormData({
          fullname: '',
          username: '',
          email: '',
          password: '',
        })
      }

      
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit" >Register</button>
        <p>Already have an account? <Link to="/login">click here</Link> </p>
      </form>
      {showPopup && <div className="popup">Registered successfully</div>}
    </div>
  );
};

export default Register;
