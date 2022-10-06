import axios from "axios";
import { getHOST, getHeaders, getToken, getCountryId } from './config';

let headers={};

const axiosInstance = axios.create({
    baseURL: getHOST(),
    headers
});

axiosInstance.interceptors.request.use(
    async (config) => {
        // if (config.url == 'send_otp.php'){
        //     config.baseURL= 'https://staging-api.laboga.com/app/vendor_v01/api/'
        // }
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

export default axiosInstance;

