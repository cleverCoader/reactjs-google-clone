import {useState, useEffect}  from 'react'
import API_KEY from "./keys";

const CONTEXT_KEY = "c12d73f5d356cd2a2";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
            fetch(
                `https://developers.google.com/custom-search/v1?key=
                ${API_KEY}&cx=${CONTEXT_KEY}&g=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData();
    }, [term])
    
    return { data }

};

export default useGoogleSearch;
