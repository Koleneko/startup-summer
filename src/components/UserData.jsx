/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Avatar from '../img/profile_img.jpg';
import Following from '../img/Following.svg';
import Followers from '../img/Followers.svg';

function UserData({ userInfo }) {
  function roundMetrics(Metrics) {
    return Metrics <= 1000 ? Metrics.toString() : (Metrics / 1000).toFixed(1).toString() + 'k';
  }

  return (
    <Fragment>
      <div className="user_data">
        <img className="Avatar" src={userInfo.avatar_url} alt="Avatar" />
        <div className="User_data_wrapper">
          <p className="Name">{userInfo.name}</p>
          <a className="Link" href={userInfo.html_url} target={'_blank'} rel={'noreferrer'}>
            {userInfo.login}
          </a>
          <div className="Metrics_wrapper">
            <div className="Metrics">
              <img src={Followers} alt="" />
              <p className="Metrics_text">{roundMetrics(userInfo.followers)} Followers</p>
            </div>
            <div className="Metrics">
              <img src={Following} alt="" />
              <p className="Metrics_text">{roundMetrics(userInfo.following)} following</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserData;
