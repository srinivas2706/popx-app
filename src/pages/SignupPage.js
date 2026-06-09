import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.fullName && formData.phone && formData.email && formData.password) {
      navigate('/profile', { state: { user: formData } });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">
          Create your
          <br />
          PopX account
        </h1>

        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            className="form-input"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone number<span className="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="form-input"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email address<span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password<span className="required"> *</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="company">
            Company name
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="form-input"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Are you an Agency?<span className="required">*</span>
          </label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>
      </div>

      <div className="signup-footer">
        <button className="btn-create" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
