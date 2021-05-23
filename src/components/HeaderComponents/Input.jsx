import React from 'react';
import Search_Button from '../../img/Search_Button.svg';


class Input extends React.Component {
    render() {
      return(
        <div className="Search">
          <a className="Search_Button" href="#">
            <img src={Search_Button} alt="img" />
          </a>
          <input className="Input" type="text" placeholder="Enter GitHub username" />
        </div>
      )
    }
}

export default Input