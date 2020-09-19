import React from "react";
import "./Home.css";
//-----------------------------
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import { Link } from "react-router-dom";

import Search from './Search';

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/Gmail">Gmail</Link>
          <Link to="/Images">Images</Link>
          <AppsIcon className="headerRight_icons" />
          <Avatar className="headerRight_icons" />
        </div>
      </div>

      <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google" /> 
              <div className="homeInputContainer">
                    <Search />
              </div>
              <div className="home_languages">
                  <p>Google offered in: <span className="languages" >hindi, kannada, telugu, tamil, malayalam, marati,spanish, french, chainese</span> </p>
              </div>   
          </div>
          
          <div className="footer">
                <hr />
                <p className="home_coutry">India </p>
                <hr />
                <div className="home_footer">
                  <div className="homeFooterLeft">
                      <Link to="/advertising">Advertising</Link>
                      <Link to="/business">Business</Link>
                      {/* <Link to="/about">About</Link> */}
                      <Link to="/howsearchworks">How Search Works</Link>
                  </div>
                  <div className='homeFooterRight'>
                      <Link to="/privacy">Privacy</Link>
                      <Link to="/terms">Terms</Link>
                      <Link to="/settings">Settings</Link>
                  </div>
                </div>
            </div>
    </div>
  );
}

export default Home;
