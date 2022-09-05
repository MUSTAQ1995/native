import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
// import RNLocation from "react-native-location";
// import Geocoder from "react-native-geocoder";

import Geolocation from '@react-native-community/geolocation';

const Location = () => {
  // RNLocation.configure({
  //   distanceFilter: 5.0
  // })
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [addres, setAddress] = useState("");

  const API_KEY = " AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc";

  // const getAddress = async (lat, lng) => {
  //   Geocoder.fallbackToGoogle(API_KEY);
  //   console.log(lat, lng, "lat&&lng")
  //   try{
  //     let resData = await Geocoder.geocodePosition({ lat, lng})
  //       // setAddress(resData[0].formattedAddress)
  //       console.log(resData[0].formattedAddress, "geocoder details")
  //   } catch(err){alert(err)}
  // };

  // useEffect(() =>{
  //   Geolocation.getCurrentPosition(data =>{
  //     setLat(data.coords.latitude),
  //     setLng(data.coords.longitude)
  //     console.log(lat, "only lat")
  //   })
   
  //   lat !== "" && getAddress()
  // }, [])


  return (
   <View style={StyleSheet.container} >
      <Text style={styles.text} >Welcome!</Text>
      <Text>latitude:{lat}</Text>
      <Text>Longitude: {lng}</Text>
      <Text>addres: {}</Text>
   </View>
  )
}

const styles= StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex:1,
    justifyContent:"center",
    color: "#000"
  }
})
export default Location