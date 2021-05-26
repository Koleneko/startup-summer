import React, { Component } from 'react';
import Logo from '../img/Logo.svg';
import Search_Button from '../img/Search_Button.svg';

class Header extends Component {

  render () { 
    return(
    <div>
        <div className="Header">
          <img className="Logo" src={Logo} alt="img" />
          <div className="Search">
          <button className="Search_Button">
            <img src={Search_Button} alt="img" />
          </button>
          <input className="Input" type="text" placeholder="Enter GitHub username" />
        </div>
          </div>
      </div>
    
    )
}
}


export default Header;
