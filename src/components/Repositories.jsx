/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Repositories({ repoCount, userRepos }) {
  const RepoList = () =>
    userRepos.map((userRepo) => (
      <div key={userRepo.id}>
        <RepoBlock
          repoUrl={userRepo.html_url}
          repoName={userRepo.name}
          repoDesc={userRepo.description}
        />
      </div>
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

  return (
    <div className="Repository">
      <h1 className="Repo_main">Repositories ({repoCount})</h1>
      <RepoList />
      <div className="Pagination">Pagination template</div>
    </div>
  );
}

export default Repositories;
