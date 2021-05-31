import React, { Fragment } from 'react';
import EmptyState from './EmptyState';
import UserData from './UserData';
import Repositories from './Repositories';
import UserNotFound from './UserNotFound';
import NoRepos from './NoRepos';

function MainPage({ pageState, userInfo, userRepos }) {
  const renderSwitch = () => {
    switch (pageState) {
      case 'emptystate':
        return <EmptyState />;
      case 'usernotfound':
        return <UserNotFound />;
      default:
        return <EmptyState />;
    }
  };

  return (
    <div className="Main_page">
      {pageState ? (
        <div className="Wrapper" style={{ justifyContent: 'center' }}>
          {renderSwitch()}
        </div>
      ) : (
        <div className="Wrapper" style={{ justifyContent: '' }}>
          <Fragment>
            <UserData userInfo={userInfo} />
            {userRepos.length ? (
              <Repositories repoCount={userInfo.public_repos} userRepos={userRepos} />
            ) : (
              <NoRepos />
            )}
          </Fragment>
        </div>
      )}
    </div>
  );
}

export default MainPage;
