import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//componets
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import ForgotPassword from '../screens/Login/ForgotPassword';
import SignUp from '../screens/Login/SignUp';
import CustomValidation from '../screens/Login/CustomValidation';
import KeyboardAvoid from '../screens/components/KeyboardAvoid';
import Header from "../screens/Header";
import { Button } from "react-native";
// import Login from '../screens/Login/Login';

// Lagoba:
import Login from '../screens/components/Laboga/Login';
import Verify from '../screens/components/Laboga/Verify';
import Steppe from '../screens/components/Laboga/Steppe';
import Dashboard from "../screens/components/Laboga/Dashboard";
import BottomTabs from './BottomTabs';
import AllProducts from '../screens/components/Laboga/AllProducts';

//  --------------------------------------------------------------------

const Stack = createStackNavigator();

export const Navigation = () => {

  return (
    <Stack.Navigator 
      initialRouteName='bottomtabs' 
      screenOptions={{
        // headerStyle:{
        //   backgroundColor:"#fff",
        // },
        headerTintColor: "#57504B",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
    >
      <Stack.Screen 
        name="bottomtabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
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
          name="allproducts"
          component={AllProducts}
          options={{
            title:'Add Products',
            // headerShown:false
          }}
        />
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
          name="stepper"
          component={Steppe}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown:false
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
