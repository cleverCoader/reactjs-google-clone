import React from 'react';
import './SearchPage.css';


import { useStateValue } from "../StateProvider";
import useGoogleSearch from './useGoogleSearch';
// import { Link } from '@material-ui/core';
import Search from '../pages/Search';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
//-----------------------------------------------------
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
//import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import FlightIcon from '@material-ui/icons/Flight';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

import Response from './Response';



function SearchPage() {

    const [{ term }, dispatch] = useStateValue();     //[{ term }, dispatch]

    //Live API call
    const { data } = useGoogleSearch(term);

    //Mock API call

    // const data = Response;
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
                    <Search className="searchPage_searchBar" hideButton />
                    
                    <div className="searchPage_options">
                        <div className="options_left">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>  
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>  
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>  
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>  
                            <div className="searchPage_option">
                                <OndemandVideoIcon />
                                <Link to="/videos">Videos</Link>
                            </div>  
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>  
                        </div>
                        <div className="options_right">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div> 
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>


            {data && (
                 <div className="searchPage_results">
                    <p className="searchPage_resultCount">
        {/*finally found is its again case sensitivity problem i wrote ( SearchInformation ) instead of (searchInformation) i,e first letter 's' capital*/ }
                        {/* About {data?.SearchInformation.formattedTotalResults} results ( {data?.SearchInformation.formattedSearchTime} seconds)   */}
                        About {data?.searchInformation.formattedTotalResults} results ( {data?.searchInformation.formattedSearchTime} seconds)
                     </p>
                    
                    {data?.items.map((item, i) => (
                        <div key={i} className="searchPage_result">
                            <a href={item.link} > 
                                {item.displayLink}
                            </a>
                            <a className="searchPage_resultTitle" href={item.link} >
                                <h2> {item.title} </h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}  


                 </div>
            )}

           

        </div>
    )
}

export default SearchPage;





