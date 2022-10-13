import axios from "axios";
import { getHOST, getHeaders, getToken, getCountryId } from './config';

let headers={};

const axiosInstance = axios.create({
    baseURL: getHOST(),
    headers
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getToken();
        const country_id = await getCountryId();
        config.headers=getHeaders(config.url);
        config.headers.Token=token || "";
        config.headers.country_id=country_id || "";
        return config;
    },
    (error) => {
        Promise.reject(error)
    }
);
// axiosInstance.interceptors.response.use((config)=>{
//     console.log(config,'responseeeeeeeeeeeeeeeeeeeeeeeeeeee')
//     return config.response
// })
export default axiosInstance;

