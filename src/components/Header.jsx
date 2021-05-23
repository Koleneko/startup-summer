import React, { Component } from 'react';
import Logo from '../img/Logo.svg';
import Input from './HeaderComponents/Input';


class Header extends Component {

  render () { 
    return(
    <div>
        <div className="Header">
          <img className="Logo" src={Logo} alt="img" />
              <Input />
          </div>
      </div>
    
    )
}
}


export default Header;
