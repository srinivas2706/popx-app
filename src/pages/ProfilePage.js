import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const location = useLocation();
  const user = location.state?.user;

  const displayName = user?.fullName || 'Marry Doe';
  const displayEmail = user?.email || 'Marry@Gmail.Com';

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Account Settings</h2>

      <div className="profile-card">
        <div className="avatar-wrapper">
          <div className="avatar">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#e0d0f5" />
              <circle cx="30" cy="24" r="10" fill="#9b6fdd" />
              <ellipse cx="30" cy="50" rx="16" ry="12" fill="#9b6fdd" />
            </svg>
          </div>
          <div className="avatar-edit-btn">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </div>
        </div>

        <div className="user-info">
          <p className="user-name">{displayName}</p>
          <p className="user-email">{displayEmail}</p>
        </div>
      </div>

      <div className="profile-divider" />

      <p className="profile-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
        Sed Diam
      </p>
    </div>
  );
}

export default ProfilePage;
