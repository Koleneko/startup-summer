import React from 'react';

import UserData from './UserData';
import Repositories from './Repositories';

class MainPage extends React.Component {
  render() {
    return(
      <div className="Main_page">
        <div className="Wrapper">
          <UserData />
          <Repositories />

          
        </div>
      </div>
    )
  }
}

export default MainPage