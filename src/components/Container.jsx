import React, { Fragment } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import UserData from './UserData';

export default function Container() {
  const [state, setState] = React.useState({
    clientInput: '',
    isFetching: false,
    isSearching: false,
    emptyState: false,
    userInfo: null,
    userRepos: null,
    userFound: false,
    pageNum: 1,
  });

  const getUser = () => {
    fetch(`api.github.com/users/${state.clientInput}`).then((res) => res.json());
  };

  const getRepos = () => {
    fetch(
      `https://api.github.com/users/${state.clientInput}/repos?per_page=4&page=${state.pageNum}&sort=updated`,
    ).then((res) => res.json());
  };

  function startSearch() {
    alert('hi');
  }

  function enterPressHandler(event) {
    event.key === 'Enter' && startSearch();
  }

  function onChangeHandler(event) {
    setState({ clientInput: event.target.value });
  }
  return (
    <Fragment>
      <Header
        state={state}
        startSearch={startSearch}
        onChangeHandler={onChangeHandler}
        enterPressHandler={enterPressHandler}
      />
      <MainPage state={state} />
    </Fragment>
  );
}
