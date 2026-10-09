import axios from "axios";


export const proxyServer = axios.create({
    baseURL: "https://uz5hp3lj7j.execute-api.us-east-1.amazonaws.com/api/v1",
    withCredentials: true,
    
});
export const globalServer = axios.create({
    baseURL: "https://uz5hp3lj7j.execute-api.us-east-1.amazonaws.com/api/v1",
    withCredentials: true,
    
});