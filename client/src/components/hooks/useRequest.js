import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

export default function useRequest(url, initialState) {
  const baseUrl = "http://localhost:3030";

  const { user, isAuthenticated } = useContext(UserContext);
  const [data, setData] = useState(initialState);

  const request = async (url, method, data, config = {}) => {
    let headers = {};

    if (data) {
      headers["content-type"] = "application/json";
    }

    const token = config.accessToken || user?.accessToken;

    if (token) {
      headers["X-Authorization"] = token;
    }

    const finalOptions = {
      method: method || "GET",
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
    }

    if (response.status === 204) {
      return {};
    }

    const result = await response.json();
    return result;
  };

  useEffect(() => {
    if (!url) return;

    const isAuthRequired =
      url.startsWith("/data") || url.startsWith("/profile");

    if (isAuthRequired && !isAuthenticated) {
      return;
    }

    request(url)
      .then((result) => setData(result))
      .catch((err) => alert(err));
  }, [url, isAuthenticated]);

  return {
    request,
    data,
    setData,
  };
}
