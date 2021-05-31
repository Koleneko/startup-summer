/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import UserData from './UserData';

export default function Container() {
  const [input, setInput] = React.useState('');
  const [userInfo, setInfo] = React.useState();
  const [userRepos, setRepos] = React.useState([]);
  const [pageCount, setPage] = React.useState(1);

  const [pageState, setPageState] = React.useState('emptystate');

  const getUser = async () => {
    let response = await fetch(`https://api.github.com/users/${input}`);
    return response.json();
  };

  const getRepos = async () => {
    let response = await fetch(
      `https://api.github.com/users/${input}/repos?per_page=4&page=${pageCount}&sort=updated`,
    );
    return response.json();
  };

  const startSearch = async () => {
    let data = await getUser();
    let repos = await getRepos();
    if (data.message) {
      setPageState('usernotfound');
    } else {
      setInfo(data);
      repos.message ? setRepos([]) : setRepos(repos);
      setPageState('');
    }
  };

  const enterPressHandler = (event) => {
    event.key === 'Enter' && startSearch();
  };

  function onChangeHandler(event) {
    setInput(event.target.value);
  }
  return (
    <Fragment>
      <Header
        input={input}
        startSearch={startSearch}
        onChangeHandler={onChangeHandler}
        enterPressHandler={enterPressHandler}
      />
      <MainPage pageState={pageState} userInfo={userInfo} userRepos={userRepos} />
    </Fragment>
  );
}
