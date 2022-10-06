import axiosInstance from "../../services/api";


export const registration = async (data) => {
  try{
    const response = await axiosInstance.post("registration", data)
    if(response.data.status){
      return response.data.response
    }
    return response.data.response
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
    const response = await axiosInstance.post("verify_otp", data)
    return response?.data
  } catch(errors) {
    throw(errors)
  }
}