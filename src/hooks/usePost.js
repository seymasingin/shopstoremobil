import React, {useState} from "react";
import axios from "axios";

const usePost = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (url, apiData)=>{
        try {
            setLoading(true);
            const {data:responseData} = await axios.post(url, apiData);
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(flase);
        }
    }

    return {data, loading, error, post }
}

export default usePost;