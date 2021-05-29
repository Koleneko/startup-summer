import React, { Fragment } from 'react';
import Avatar from '../img/profile_img.jpg';
import Following from '../img/Following.svg';
import Followers from '../img/Followers.svg';

function UserData({}) {
  return (
    <Fragment>
      <div className="user_data">
        <img className="Avatar" src={Avatar} alt="Avatar" />
        <div className="User_data_wrapper">
          <p className="Name">Dan Abramov</p>
          <a className="Link" href="">
            gaearon
          </a>
          <div className="Metrics_wrapper">
            <div className="Metrics">
              <img src={Followers} alt="" />
              <p className="Metrics_text">65.8k followers</p>
            </div>
            <div className="Metrics">
              <img src={Following} alt="" />
              <p className="Metrics_text">171 following</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserData;
