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
    console.log(response.data.response)

  } catch(error){
    console.log(error)
    throw(error)
  }
}