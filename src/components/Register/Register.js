// RegistrationForm.jsx
import React, { useState } from 'react';
// import './Register.css';
import { Navigate } from 'react-router-dom';

const Register = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handl  = async () =>{
     Navigate('/')
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
    Navigate('/')
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

        <button type="submit"  >Register</button>
      </form>
    </div>
  );
};

export default Register;
