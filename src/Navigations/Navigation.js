import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//componets
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import Login from '../screens/Login/Login';
import ForgotPassword from '../screens/Login/ForgotPassword';
import SignUp from '../screens/Login/SignUp';
import CustomValidation from '../screens/Login/CustomValidation';
import KeyboardAvoid from '../screens/components/KeyboardAvoid';


//  --------------------------------------------------------------------

const Stack = createStackNavigator();

export const Navigation = () => {

  return (
    <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contacts" component={Contact} options={{title: "Our Contacts"}} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CustomValidation" component={CustomValidation} />
        <Stack.Screen name="Key-board" component={KeyboardAvoid} />
    </Stack.Navigator>
  )
};
