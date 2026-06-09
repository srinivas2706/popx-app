import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (formData.email && formData.password) {
      navigate('/profile');
    }
  };

  const isFormValid = formData.email.trim() && formData.password.trim();

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          className={`btn-login ${isFormValid ? 'active' : 'disabled'}`}
          onClick={handleLogin}
          disabled={!isFormValid}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
