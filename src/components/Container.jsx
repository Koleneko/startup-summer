import React, {useState} from 'react';
import Header from './Header';
import MainPage from "./MainPage";

class Container extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     clientInput : null,
  //     isFetching : false,
  //     isSearching : false,
  //     emptyState : true,
  //     userInfo : null,
  //     userRepos : null,
  //     userFound : false,
  //   }
  // }
  state = {
      clientInput : null,
      isFetching : false,
      isSearching : false,
      emptyState : false,
      userInfo : null,
      userRepos : null,
      userFound : false,
    }
  

  render() {

    return(
      <div>
      <Header />
      <MainPage emptyState = {this.state.emptyState}/>
      </div>
    )
  }

}

export default Container





