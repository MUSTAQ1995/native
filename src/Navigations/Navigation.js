import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//componets
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import Login from '../screens/components/Laboga/Login';
import ForgotPassword from '../screens/Login/ForgotPassword';
import SignUp from '../screens/Login/SignUp';
import CustomValidation from '../screens/Login/CustomValidation';
import KeyboardAvoid from '../screens/components/KeyboardAvoid';
import Header from "../screens/Header";
import { Button } from "react-native";


//  --------------------------------------------------------------------

const Stack = createStackNavigator();

export const Navigation = () => {

  return (
    <Stack.Navigator 
      initialRouteName='Login' 
      screenOptions={{
        headerStyle:{
          backgroundColor:"#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          // options={{
          //   headerShown: false
          // }}
        />
        <Stack.Screen 
          name="Contacts" 
          component={Contact} 
          options={{
            title: "Our Contacts", 
            // headerShown: false
          }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
           options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CustomValidation" component={CustomValidation} />
        <Stack.Screen name="Key-board" component={KeyboardAvoid} />
        <Stack.Screen 
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
        />
    </Stack.Navigator>
  )
};
