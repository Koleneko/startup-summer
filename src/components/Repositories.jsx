/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import '../style/pagination-style.css';
import Loader from 'react-loader-spinner';

function Repositories({ repoCount, userRepos, changePage, currentPage, fetching }) {
  const RepoList = () =>
    userRepos.map((userRepo) => (
      <RepoBlock
        key={userRepo.id}
        repoUrl={userRepo.html_url}
        repoName={userRepo.name}
        repoDesc={userRepo.description}
      />
    ));

  function RepoBlock({ repoUrl, repoName, repoDesc }) {
    return (
      <div className="Repositories_blocks">
        <a className="Repo_link" href={repoUrl} target={'_blank'} rel={'noreferrer'}>
          {repoName}
        </a>
        <p className="Repo_description">{repoDesc}</p>
      </div>
    );
  }

  function PaginationCounter() {
    var firstNum;
    var lastNum;
    if (currentPage === Math.ceil(repoCount / 4)) {
      firstNum = repoCount - (repoCount % 4);
      lastNum = repoCount;
    } else {
      firstNum = currentPage * 4 - 3;
      lastNum = currentPage * 4;
    }
    return `${firstNum} - ${lastNum} of ${repoCount} items`;
  }

  return (
    <div className="Repository">
      {fetching ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <Fragment>
          <h1 className="Repo_main">Repositories ({repoCount})</h1>
          <RepoList />
          <div className="Pagination_wrapper">
            {repoCount > 4 && (
              <Fragment>
                <PaginationCounter />
                <ReactPaginate
                  pageCount={Math.ceil(repoCount / 4)}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  forcePage={currentPage - 1}
                  onPageChange={changePage}
                  previousLabel={'<'}
                  nextLabel={'>'}
                  containerClassName={'pagination'}
                  pageClassName={'paginationButton'}
                  previousClassName={'paginationGoButton'}
                  nextClassName={'paginationGoButton'}
                  activeClassName={'paginationActiveButton'}
                  breakClassName={'paginationBreakButton'}
                />
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Repositories;
