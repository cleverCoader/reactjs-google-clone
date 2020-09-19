import React from 'react';
import './Home.css';
//-----------------------------
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">

            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to='/about'>Aboutus</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to='/Gmail'>Gmail</Link>
                    <Link to='/Images'>Images</Link>  
                    <AppsIcon className="headerRight_icons" />
                    <Avatar className="headerRight_icons" />

                </div>
            </div>

            
            
            <div className="home_body">
                
            </div>

        </div>
    )
}

export default Home;
