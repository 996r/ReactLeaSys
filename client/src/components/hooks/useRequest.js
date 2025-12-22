

import { useContext, useEffect, useState, useCallback } from "react"; 
import UserContext from "../context/UserContext";
import { ADMIN_EMAILS } from "../constrants/constrants";

export default function useRequest(url, initialState) {
  // const baseUrl = "http://localhost:3030";
  const baseUrl = "https://reactleasysserver.onrender.com";
  

  const SECURE_COLLECTION_PATH_START = '/data';

  const { user, isAuthenticated } = useContext(UserContext);
  const isAdmin = ADMIN_EMAILS.includes(user?.email);
  const [data, setData] = useState(initialState);


  const request = useCallback(async (url, method, data, config = {}) => {
    let headers = {};
    const currentMethod = method || "GET";

    if (data) {
      headers["content-type"] = "application/json";
    }

    const token = config.accessToken || user?.accessToken;

    if (token) {
      headers["X-Authorization"] = token;
    }

    if (isAdmin && url.startsWith(SECURE_COLLECTION_PATH_START)) {
        if (currentMethod !== 'GET') {
            headers["X-Admin"] = "true";
        }
    }
    

    const finalOptions = {
      method: currentMethod, 
      body: data ? JSON.stringify(data) : undefined,

      ...(Object.keys(headers).length > 0 && { headers: headers }),
    };

    const response = await fetch(`${baseUrl}${url}`, finalOptions);

    if (!response.ok) {
      if (response.status === 403 && url === "/users/logout") {
        console.warn(
          "Server rejected logout (session already invalid). Resolving promise successfully."
        );
        return {};
      }
      
      let errorData = {};
      try {
          errorData = await response.json();
      } catch (e) {
          errorData.message = `HTTP error! Status: ${response.status}`;
          errorData.code = response.status;
      }
      throw new Error(`API Error ${errorData.code || response.status}: ${errorData.message || 'Unknown error'}`);
    }

    if (response.status === 204) {
      return {};
    }

    

    const result = await response.json();
    return result;
  }, [user, isAdmin, baseUrl]); 

  useEffect(() => {
    if (!url) return;

    const isAuthRequired =
      url.startsWith("/data") || url.startsWith("/profile");

    if (isAuthRequired && !isAuthenticated) {
      return;
    }

    request(url)
      .then((result) => setData(result))
      .catch((err) => alert(err.message || err)); 
  }, [url, isAuthenticated, request]); 

  return {
    request,
    data,
    setData,
  };
}
