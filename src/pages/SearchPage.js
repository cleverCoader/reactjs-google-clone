import React from 'react';
import './SearchPage.css';

import { useStateValue } from "../StateProvider";
import useGoogleSearch from './useGoogleSearch';
import { Link } from '@material-ui/core';
import Search from '../pages/Search';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className="searchPage" >
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="google-logo"
                    />
                </Link>
                <div className="searchPage_header1">
                    <Search className="searchPage_searchBar"  hideButton />
                </div>
            </div>
            <div className="searchPahe_results">

            </div>

        </div>
    )
}

export default SearchPage;
