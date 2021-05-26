import React from 'react';

import UserData from './UserData';
import Repositories from './Repositories';

class MainPage extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
   
    render() {
      return(
        <div className="Main_page">
          {
          this.props.emptyState ?
          <div className="Wrapper">
                <UserData />
                <Repositories />
            </div> :
            <span>Empty state</span>
            }
        </div>
      )
    }
  }

export default MainPage