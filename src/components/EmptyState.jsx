import React from 'react';
// import '../style/EmptyState.css';
import InitialState from '../img/InitialState.svg';

export default function EmptyState() {
  return (
    <div className="Main">
      <img className="State_logo" src={InitialState} alt="img" />
      <p>Start with searching a GitHub user</p>
    </div>
  );
}
