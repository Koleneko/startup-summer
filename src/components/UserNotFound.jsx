import React from 'react';
import userNotFound from '../img/UserNotFound.svg';

export default function UserNotFound() {
  return (
    <div className="Main">
      <img className="State_logo" src={userNotFound} alt="img" />
      <p>User not found</p>
    </div>
  );
}
