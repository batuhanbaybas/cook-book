import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data: resData } = await axios.get(url);
            setData(resData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, useFetch]);
    return { data, loading, error };

}
export default useFetch;