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
          <div className="Wrapper">
            {/* {
              this.props.emptyState ? <div>Empty state</div> :
              <div>
              <UserData />
              <Repositories />
              </div>
            } */}
            console.log({this.props})
          </div>
        </div>
      )
    }
  }

export default MainPage