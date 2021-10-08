import { useEffect, useState, useCallback } from "react"

const useFetch = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //in order for this function to be able to post as well as get what do i need?

     
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setError('');
        setIsLoading(true); 

        console.log('Fetch Running....');

        try{

            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

            if (!response.ok){
                throw new Error('Request Failed')
            }

            const json = await response.json();
            applyData(json);

        } catch (error){
            setError(error.message)
        } 
        
        setIsLoading(false);
    },[])

    return [isLoading, error, sendRequest];

}

export default useFetch;
