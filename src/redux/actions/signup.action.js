import { Alert } from "react-native";
import axiosInstance from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const setToken = async (data) => {
  try {
    data && await AsyncStorage.setItem("token", data)
    // console.log(data, "token set up")
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
    return response?.data
  } catch(error){
    throw(error)
  }
}

export const getOtp = async (data) => {
  try {
    const response = await axiosInstance.post("send_otp.php", data)
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
  
}