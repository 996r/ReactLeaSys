import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";



export default function useRequest (url, initialState = {}) {

    const baseUrl = "http://localhost:3030";

    const {user, isAuthenticated} = useContext(UserContext);
    const [data, setData] = useState(initialState);

    const request = async (url, method, data, config = {}) => {

        let options = {} ;

        if(method){
            options.method = method;
        }

        if (data){
            options.header = {
                 "content-type": "application/json",
            };
            options.body = JSON.stringify(data);
        }

        if(config.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                "X-Autherization": config.accessToken || user.accessToken,
            }; 
        }

        const response = await fetch(`${baseUrl}${url}`,options);

         if (!response.ok) {
             throw response.statusText;
            }
         if (response.status === 204) {
            return {};
         }

        const result = await response.json();
        return result;

    };

    useEffect (() => {
        if(!url) return;

        request(url).then((result) => setData(result))
        .catch(err => alert(err));
    },[url]);

    return {
        request,
        data,
        setData,
    };

}