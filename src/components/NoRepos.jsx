import React from 'react';
import ReposNotFound from '../img/ReposNotFound.svg';

export default function NoRepos() {
  return (
    <div className="Main">
      <img className="State_logo" src={ReposNotFound} alt="img" />
      <p>Repository list is empty</p>
    </div>
  );
}
