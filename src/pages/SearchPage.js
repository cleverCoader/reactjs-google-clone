import React from 'react';
import './SearchPage.css';

import { useStateValue } from "../StateProvider";
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className="searchPage" >
            <div className="searchPahe_header">
                <h1> {term} </h1>
            </div>
            <div className="searchPahe_results">

            </div>

        </div>
    )
}

export default SearchPage;
