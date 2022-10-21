import SHA1 from 'sha1';
import md5 from 'md5'
import AsyncStorage from '@react-native-async-storage/async-storage';




const HOST = "https://staging-api.laboga.com/app/vendor_v01/api/"; 
// const HOST = http://35.154.4.154/la_boga/app/vendor_v01/api/

const USERNAME = "";
const PASSWORD  = "";


export const encryptData = (text) => {
    return md5(text);
}


export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        console.log(token, "token from the backend")
        if(token){
            return token;
        }
      } catch(e) {
    }
}

export const getCountryId = async () => {
    try {
        const country_id = await AsyncStorage.getItem('country_id');
        if(country_id){
            return country_id;
        }
      } catch(e) {
    }
}


export const getHOST = () => {
    return HOST;
}

const getAuthHeaders = (routeUrl ) => {
    const finalAuth = SHA1(HOST + routeUrl +"|"+ USERNAME +"|"+ PASSWORD);
    return finalAuth; 
}

export const getHeaders = (url) => { 
    let headers = {
        'Content-Type':'application/json',
        'Authentication': getAuthHeaders(url),
        'Accept-Language':'en',
        'crossDomain': 'true',
    };
    return headers;
}