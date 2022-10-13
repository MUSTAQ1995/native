import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from "react-native-device-info";
import { push_notification } from '../../../redux/actions/signup.action';

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
      <Button
        title="Push"
        onPress={() => notiFication()}
      />
      <View style={styles.body} >
        <Image
          style={styles.cloth_hanger}
          source={require("../../../assets/lagoba_assets/clothes-hanger.png")}
        />
        <Text style={styles.looks_empty} >Looks Empty</Text>
        <Text style={styles.add_some_products} >let's add some products</Text>
        <TouchableOpacity
          style={styles.add_products}
          onPress={handelAddProjects} >
          <Text style={styles.add_product_text} >
            ADD PRODUCTS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
  cloth_hanger: {
    height: 83.5,
    width: 112,
    marginTop: 124,
  },
  looks_empty: {
    width: 132,
    // height:23,
    marginTop: 21.6,
    fontSize: 20,
    fontWeight: "bold",
    color: "#57504B",
    textAlign: "center"
  },
  add_some_products: {
    marginTop: 5,
    width: 194,
    height: 18,
    fontSize: 16,
    color: "#57504B",
    textAlign: "center",
    fontWeight: "600"
  },
  add_products: {
    marginTop: 86,
    height: 56,
    width: 188,
    backgroundColor: "#F2E7D3",
    alignItems: "center",
    justifyContent: "center"
  },
  add_product_text: {

    height: 15,
    width: 116,
    color: "#57504B",
    fontWeight: "bold"
  }
})

export default Home