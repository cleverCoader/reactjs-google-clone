import React, {useState} from 'react'
import './Search.css';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer";


function Search({ hideButton = false }) {

    const [{},dispatch] = useStateValue();

    const [input, setInput] = useState(" ");
    const history = useHistory();

    const search = e => {
        e.preventDefault(); //refreshing of page is prevented
        console.log('you hit enter');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term :input

        })

        history.push('/search');

    }

    return (
        <form className="search" >
            <div className="search_input">
                <SearchIcon className="search_icon" />
                <input value={input} onChange={e=>setInput(e.target.value)}  placeholder="Search" type="text" />
                <MicIcon />
            </div>

            {!hideButton ? (
                <div className="search_buttons">
                <Button type="submit" onClick={search} variant="outlined" >Google Search</Button>
                <Button variant="outlined" >I'm feeling Wonder</Button>
            </div>

            ) : (
                <div className="search_buttons">
                <Button className="search_buttonHidden" type="submit" onClick={search} variant="outlined" >Google Search</Button>
                <Button className="search_buttonHidden" variant="outlined" >I'm feeling Wonder</Button>
            </div>
            )}
            
            
        </form>
    )
}

export default Search;
