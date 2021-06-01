import React, { Fragment } from 'react';
import Header from './Header';
import MainPage from './MainPage';

export default function Container() {
  const [input, setInput] = React.useState('');
  const [userInfo, setInfo] = React.useState();
  const [userRepos, setRepos] = React.useState([]);
  const [currentPage, setCurrPage] = React.useState(1);
  const [pageState, setPageState] = React.useState('emptystate');
  const [loading, setLoading] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);

  const getUser = async () => {
    let response = await fetch(`https://api.github.com/users/${input}`);
    return response.json();
  };

  const getRepos = async (pageCount = 1) => {
    setFetching(true);
    let response = await fetch(
      `https://api.github.com/users/${input}/repos?per_page=4&page=${pageCount}&sort=updated`,
    );
    setCurrPage(pageCount);
    setFetching(false);
    return await response.json();
  };

  const startSearch = async () => {
    if (input) {
      setLoading(true);
      let data = await getUser();
      let repos = await getRepos();
      if (data.message) {
        setPageState('usernotfound');
      } else {
        setInfo(data);
        repos.message ? setRepos([]) : setRepos(repos);
        setPageState('');
      }
      setLoading(false);
    }
  };

  const enterPressHandler = (event) => {
    event.key === 'Enter' && startSearch();
  };

  const changePage = ({ selected }) => {
    getRepos(selected + 1).then((repos) => setRepos(repos));
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
      <MainPage
        pageState={pageState}
        userInfo={userInfo}
        userRepos={userRepos}
        changePage={changePage}
        loading={loading}
        currentPage={currentPage}
        fetching={fetching}
      />
    </Fragment>
  );
}
