import { useState, useEffect } from "react";

const useFetch = (url) => {
    console.log('hook body');

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('hook useEffect');

        const fetchData = async () => {
            try {
                const resp = await fetch(url);

                console.log(resp);

                if (!resp.ok) {
                    setHasError(true);
                    setIsLoading(false);

                    return;
                }

                setData(await resp.json());
            } catch (error) {
                setHasError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);
    
    
    return [isLoading, hasError, data];
}

export default useFetch;