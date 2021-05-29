import React from 'react';
import Logo from '../img/Logo.svg';
import Search_Button from '../img/Search_Button.svg';

function Header({ startSearch, state, onChangeHandler, enterPressHandler }) {
  return (
    <div className="Header">
      <img className="Logo" src={Logo} alt="img" />
      <div className="Search">
        <button className="Search_Button" onClick={startSearch}>
          <img src={Search_Button} alt="img" />
        </button>
        <input
          className="Input"
          type="text"
          placeholder="Enter GitHub username"
          onChange={onChangeHandler}
          value={state.clientInput}
          onKeyPress={enterPressHandler}
        />
      </div>
    </div>
  );
}

// const Header = (props) = {
//   return (
//     <div className="Header">
//       <img className="Logo" src={Logo} alt="img" />
//       <div className="Search">
//         <button className="Search_Button">
//           <img src={Search_Button} alt="img" />
//         </button>
//         <input className="Input" type="text" placeholder="Enter GitHub username" />
//       </div>
//     </div>
//   )
// }

export default Header;
