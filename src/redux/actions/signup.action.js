import { Alert } from "react-native";
import axiosInstance from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const setToken = async (data) => {
  try {
    data && await AsyncStorage.setItem("token", data)
  } catch (e) {
      console.log(e, "error")
  }
}

const clearToken = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e){
    console.log(e)
  }
}
export const registration = async (data) => {
  try{
    const response = await axiosInstance.post("registration", data)
    if(response.data.status){
      return response.data
    }
    return response.data
  } catch(error) {
    throw(error)
  }
};

export const checkMobile =  async (data) => {
  try {
    const response = await axiosInstance.post("check_mobile", data)
    console.log(response.data, "otp response")
    return response?.data
  } catch(error){
    throw(error)
  }
}

export const getOtp = async (data) => {
  try {
    const response = await axiosInstance.post("send_otp.php", data)
    console.log(response.data, "otp response")
  } catch(error){
    throw(error)
  }
};

export const verifyOtp = async (data) =>{
  try{
    AsyncStorage.clear()
    const response = await axiosInstance.post("verify_otp", data)
    return response?.data
  } catch(errors) {
    throw(errors)
  }
}

export const log_in = async (data) => {
  try {
    const response = await axiosInstance.post("login", data)
    if(response.data.status === true) {
      setToken(response.data.response.token)
    }
    console.log(response.data, "action status")
    return response
  } catch (errors){
    throw(errors)
  }
}

export const get_profile = async () => {
  try {
    const response = await axiosInstance.get("get_profile")
    return(response)
  } catch (error) {
    console.log(error)
  }
}

export const update_profile = async (data) => {
  try {
    const response = await axiosInstance.post("get_profile", data)
    return response
  } catch(errors) {
    console.log(errors)
  }
}

export const log_out = async (data) => {
  try {
    const response = await axiosInstance.get("logout", data)
    return response 
  } catch(error){
    console.log(error)
  }
};


// push notification :
export const push_notification = async (data) => {
  try {
    const response = await axiosInstance.post("push", data) 
    console.log(res.data, "push notification response")
    return response;
  } catch (error) 
  {
    console.log(error,"error for push")
  }
}

//wallet details:
// export const wallet_history  = async (ind) => {
//   console.log("wallect action")
//   await axiosInstance.get(`wallet_history?index=${ind}&size=2`)
//   .then(res => {
//     console.log(res.data, "wallet response")
//     return res.data;
//   })
//   .catch(e=>{
//     console.log(e)
//   })
// }
export const wallet_history  = async(ind) => {
  try{
    const response=await axiosInstance.get(`wallet_history?index=${ind}&size=20`)
    return response.data
  }catch(err){console.log(err)}
}