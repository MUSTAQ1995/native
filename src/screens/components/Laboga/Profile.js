import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { get_profile, log_out } from '../../../redux/actions/signup.action';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../../../services/config';
import Loader from './Reusable/Loader';


const Content = [

  {
    "id": 0,
    "name": "My Wallet",
  },
  {
    "id": 1,
    "name": "Add New Products",
  },
  {
    "id": 2,
    "name": "Shipping Charges",
  },
  {
    "id": 3,
    "name": "Offers",
  },
  {
    "id": 4,
    "name": "Settings",
  },
  {
    "id": 5,
    "name": "Logout",
  },
];


const Profile = ({ navigation }) => {

  const [userDetails, setUserDetails] = useState();

  useFocusEffect(
    useCallback(() => {
      get_profile()
        .then((res) => {
          setUserDetails(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])
  )

  const handleLogout = async () => {
    const token = await getToken();
    token && log_out({ "token": token })
      .then((res) => {
        if (res.data.status === true) {
          AsyncStorage.clear();
          navigation.navigate("Login")
          Alert.alert(res.data.response.message)
        }
      })
      .catch(e => {
        console.log(e, "logout failed")
      })
  }

  const handleNavigate = (value) => {
    if (value.id == "2") {
      navigation.navigate("shippingcharges")
    } else if (value.id == "1") {
      navigation.navigate("addproducts")
    } else if (value.id == "0") {
      navigation.navigate("wallet")
    } else if (value.id == "5") {
      handleLogout()
    }
    else {
      console.log(value.id, "route is not at created")
    }
  };

  const handleEditProfile = () => {
    navigation.navigate("editprofile", {
      userDetails: userDetails
    });
  };

  return (
    <>
    {!userDetails ? <Loader/> : <View style={styles.container} >
      <View style={styles.header} >
        <Image
          source={require("../../../assets/lagoba_assets/logo_white.png")}
          style={styles.logo}
        />
      </View>
       <View style={styles.profile_details} >
        <View style={styles.profile_pic} ></View>
        <View style={styles.name} >
          <Text style={styles.user_name} >{userDetails.response.first_name} {userDetails.response.last_name}</Text>
          <Text style={styles.cont_num} >{userDetails.response.country_code} {userDetails.response.mobile_number}</Text>
        </View>
        <View>
          <Text
            style={styles.edit_info}
            onPress={() => handleEditProfile()}
          >Edit</Text>
        </View>
      </View>
      <View style={styles.body} >
        <View style={styles.list_item} >
          {Content.map((list, id) => {
            return (
              <TouchableOpacity
                key={id} style={styles.listing_data}

                onPress={() => handleNavigate(list)}>
                <Text

                  style={styles.name} >{list?.name}</Text>
                <Image
                  source={require("../../../assets/lagoba_assets/right_arrow.png")}
                  style={list.id == 5 ? { display: "none" } : styles.right_arrow}
                />
              </TouchableOpacity>
            )
          })}
        </View>
        <View style={styles.translate} >
          <Text style={styles.trans_arbic} >Arabic</Text>
          <Image
            source={require("../../../assets/lagoba_assets/translate.png")}
            style={styles.trans_image}
          />
          <Text style={styles.trans_eng} >English</Text>
        </View>
      </View>
    </View> }
   
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 744,
  },
  textstyle: {
    color: "#57504B"
  },
  logo: {
    height: 30.05,
    width: 111.85,
    marginLeft: 15
  },
  profile_details: {
    marginTop: 8.95,
    height: 120,
    backgroundColor: "#F2E7D3",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  profile_pic: {
    height: 70,
    width: 70,
    backgroundColor: "lightgray",
    borderRadius: 35,
  },
  user_name: {
    fontSize: 24,
    fontWeight: "500"
  },
  cont_num: {
    fontSize: 14,
    fontWeight: "500"
  },
  edit_info: {
    fontSize: 18,
    fontWeight: "bold"
  },
  body: {
    marginTop: 12,
  },
  list_item: {
    marginLeft: 15,
    height: 401,
  },
  listing_data: {
    height: 64,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  name: {
    color: "#57504B",
    fontSize: 14,
    fontWeight: "bold"
  },
  right_arrow: {
    width: 7.4,
    height: 12
  },
  translate: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  trans_image: {
    height: 31,
    width: 31,
    marginHorizontal: 10,
  },
  trans_arbic: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#57504B"
  },
  trans_eng: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E2D7C2"
  }
})

export default Profile