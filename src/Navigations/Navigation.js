import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, Image}  from "react-native"
// Lagoba:
import Login from '../screens/components/Laboga/Login';
import BottomTabs from "../Navigations/BottomTabs";
import Verify from '../screens/components/Laboga/Verify';
import ShippingCharge from '../screens/components/Laboga/shippingcharges/ShippingCharge';
import AddProducts from "../screens/components/Laboga/AllProducts";
import EditProfile from '../screens/components/Laboga/Profile/EditProfile';
import Home from '../screens/HomeCopy';
import Wallet from "../screens/components/Laboga/wallet/Mywallet";
import AddProductDetails from '../screens/components/Laboga/ProductDetails/AddProductDetails';
import AllOrders from '../screens/components/Laboga/Orders/AllOrders';
import Popup from '../screens/components/Laboga/Popup';
import OrderDetails from "../screens/components/Laboga/Orders/OrderDetails";
import MyProduct from '../screens/components/Laboga/ProductDetails/MyProduct';

// ui-components:
import Icon from "react-native-vector-icons/Ionicons";
//  --------------------------------------------------------------------

const Stack = createStackNavigator();

export const Navigation = () => {

  return (
    <Stack.Navigator
      initialRouteName='orderdetails'
      screenOptions={{
        headerTintColor: "#57504B",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="verify"
        component={Verify}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="bottomtabs"
        component={BottomTabs}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="shippingcharges"
        component={ShippingCharge}
        options={{
          title: "Shipping Charged"
        }}
      />

      <Stack.Screen
        name="addproducts"
        component={AddProducts}
        options={{
          title: "Add Products"
        }}
      />

      <Stack.Screen
        name='editprofile'
        component={EditProfile}
        options={{
          title: " Edit Profile",
          headerStyle: {
            backgroundColor: "#FAFAF8",
          },
        }}
      />

      <Stack.Screen
        name="wallet"
        component={Wallet}
        options={{
          title: "My Wallet",
          headerStyle: {
            backgroundColor: "#FAFAF8",
          },
        }}
      />

      <Stack.Screen
        name="productdetails"
        component={AddProductDetails}
        options={{
          title: "Add Products"
        }}
      />

      <Stack.Screen
        name="allorders"
        component={AllOrders}
        options={{
          title: "Orders",
          headerStyle: {
            borderBottomWidth: 0,
            borderBottomColor:"red"
          },
          headerRight: () => (
            <TouchableOpacity style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginRight:16,
              width:"50%"
            }} >
              <Image
                source={require("../assets/lagoba_assets/calender_icon.png")}
                style={{ height: 11, width: 11 }}
              />
              <Popup />
              <Icon name="chevron-down-outline" size={12} color="black" />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name='orderdetails'
        component={OrderDetails}
        options={{
          title:"Orders"
        }}
      />
      <Stack.Screen 
         name="myproduct"
         component={MyProduct}
         options={{
           title:"My Products"
         }}
      />
      {/* <Stack.Screen 
          name="Header" 
          component={Header} 
          // options={({ route }) => ({ title: route.params.name })}
          options={{
            title:"Our Header",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#000",
            headerTitleStyle:{
              fontWeight: "bold"
            },
            headerRight: () => (
              <Button 
                onPress ={() => alert("This is a button")}
                title="Info"
                color="#000"
              />

              
            )
          }}
        /> */}
    </Stack.Navigator>
  )
};
