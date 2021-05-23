import './style/style.css';
import Logo from './img/Logo.svg';
import Search_Button from './img/Search_Button.svg';
import './style/fonts/font-inter/stylesheet.css';
import Avatar from './img/profile_img.jpg';
import Following from './img/Following.svg';
import Followers from './img/Followers.svg';

function App() {
  return (
    <div>
      <div className="Header">
        <img className="Logo" src={Logo} alt="img" />
        <div className="Search">
          <a className="Search_Button" href="#">
            <img src={Search_Button} alt="img" />
          </a>
          <input className="Input" type="text" placeholder="Enter GitHub username" />
        </div>
      </div>
      <div className="Main_page">
        <div className="Wrapper">
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

          <div className="Repository">
            <h1 className="Repo_main">Repositories (249)</h1>
            <div className="Repositories_blocks">
              <a className="Repo_link" href="#">
                react-hot-loader
              </a>
              <p className="Repo_description">
                Tweak React components in real time. (Deprecated: use Fast Refresh instead.)
              </p>
            </div>
            <div className="Repositories_blocks">
              <a className="Repo_link" href="#">
                react-hot-loader
              </a>
              <p className="Repo_description">
                Tweak React components in real time. (Deprecated: use Fast Refresh instead.)
              </p>
            </div>
            <div className="Repositories_blocks">
              <a className="Repo_link" href="#">
                react-hot-loader
              </a>
              <p className="Repo_description">
                Tweak React components in real time. (Deprecated: use Fast Refresh instead.)
              </p>
            </div>
            <div className="Repositories_blocks">
              <a className="Repo_link" href="#">
                react-hot-loader
              </a>
              <p className="Repo_description">
                Tweak React components in real time. (Deprecated: use Fast Refresh instead.)
              </p>
            </div>
            <div className="Pagination">Pagination template</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
