import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Lagoba:
import Login from '../screens/components/Laboga/Login';
import BottomTabs from "../Navigations/BottomTabs";
import Verify from '../screens/components/Laboga/Verify';
import ShippingCharge from '../screens/components/Laboga/shippingcharges/ShippingCharge';
import AddProducts from "../screens/components/Laboga/AllProducts";

//  --------------------------------------------------------------------

const Stack = createStackNavigator();

export const Navigation = () => {

  return (
    <Stack.Navigator
      initialRouteName='bottomtabs'
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
