import React from 'react';

import UserData from './UserData';
import Repositories from './Repositories';

function MainPage({ state }) {
  return (
    <div className="Main_page">
      {state.emptyState === true ? (
        <span>Empty state</span>
      ) : (
        <div className="Wrapper">
          <UserData state={state} />
          <Repositories state={state} />
        </div>
      )}
    </div>
  );
}

export default MainPage;
