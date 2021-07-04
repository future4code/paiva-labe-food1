import {useEffect, useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/urls'


const useRequestData = (initialState, url, headerParam) => {

    const [data, setData] = useState(initialState)
    
    const getData = () => {
        if(localStorage.getItem("token") && JSON.parse(localStorage.getItem("hasAddress"))){
            const header = {
                headers: headerParam
            }
    
            axios
            .get(`${BASE_URL}${url}`, header)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
                alert("Use request")
            })
        } else {
            return;
        }
        
    };

    useEffect(() => {
        getData();
    }, []);

    return {data, getData}; 
}

export default useRequestData;