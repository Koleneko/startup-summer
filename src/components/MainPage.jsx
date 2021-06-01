import React, { Fragment } from 'react';
import EmptyState from './EmptyState';
import UserData from './UserData';
import Repositories from './Repositories';
import UserNotFound from './UserNotFound';
import NoRepos from './NoRepos';
import Loader from 'react-loader-spinner';

function MainPage({ pageState, userInfo, userRepos, changePage, loading, currentPage, fetching }) {
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
      {loading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <Fragment>
          {pageState ? (
            <div className="Wrapper" style={{ justifyContent: 'center' }}>
              {renderSwitch()}
            </div>
          ) : (
            <div className="Wrapper" style={{ justifyContent: '' }}>
              <Fragment>
                <UserData userInfo={userInfo} />
                {userRepos.length ? (
                  <Repositories
                    repoCount={userInfo.public_repos}
                    userRepos={userRepos}
                    changePage={changePage}
                    currentPage={currentPage}
                    fetching={fetching}
                  />
                ) : (
                  <NoRepos />
                )}
              </Fragment>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default MainPage;
