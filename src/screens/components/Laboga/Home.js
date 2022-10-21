import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from "react-native-device-info";
import { push_notification } from '../../../redux/actions/signup.action';
import EmptyProduct from './EmptyProduct';

const Home = ({ navigation }) => {

  // states:
  const [uniqueID, setUniqueID] = useState(null);
  const [fcm_token, setFcmToken] = useState(null);
  const [brandModal, setBrandModel] = useState(null);
  const [api_token, setApiToken] = useState(null)
  const handelAddProjects = () => {
    navigation.navigate("addproducts");
    console.log("Navigate ti the add product page")
  };

  // ------------------------------------------------------------

  // side-effects:
  // let fcmToken = await AsyncStorage.getItem("fcmtoken") 
  useEffect(() => {
    getToken();
  }, []);


  const notiFication = () => {

    let brand = DeviceInfo.getModel()
    setBrandModel(brand)
    console.log(brand, "device modal")
    console.log(api_token, "api_token")
    DeviceInfo.getUniqueId().then((uuid) => {
      console.log("uuid of the mobile", uuid)
      setUniqueID(uuid)
    })
      .catch(error => {
        console.log(error)
      })
    brandModal && uniqueID && push_notification({
      "uuid": uniqueID,
      "system_info": brandModal,
      "device_type": "1",
      "token": "cGtZ7A_7TvSwqp9fxGbzKG:APA91bFt9OB7xSBYmB6asK4lOpjkIb-ZLYjiBZJYIKT3CwQQJq1rDQlVvQ_tYg3BPoTSzg7QnOaKYDUmNotjSOibWTLdRjMWycTGFl9FycmLieA9AmW2HFcgNtmN9igJwbdDVKetTDG9"
    })
  }
  // ------------------------------------------------------------

  // Handlers: 
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
     
      if (value !== null) {
        setApiToken(value)
        console.log(value, "token from the api")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const fcmToken = async () => {
    try {
      const value = await AsyncStorage.getItem("fcmtoken")
      return value
    }
    catch (err) {
      console.log(err)
      return null
    }
  }
  const clear_storage = async () => {
    try {
      await AsyncStorage.clear()
      console.log(AsyncStorage.getItem("token"))
    } catch (error) {
      Alert.alert("Error:", error.message)
    }
  }

  // ------------------------------------------------------------

  // JSX:
  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Image
          source={require("../../../assets/lagoba_assets/logo_white.png")}
          style={styles.logo}
        />
      </View>
    <View>
      <EmptyProduct/>
    </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
    backgroundColor: "#FFF"
  },
  header: {
    backgroundColor: "#FAFAF8",
    marginTop: 5
  },
  logo: {
    height: 30,
    width: 112,
  },
  body: {
    alignItems: "center",
  },
  
})

export default Home