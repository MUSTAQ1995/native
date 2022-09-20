import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/components/Laboga/Dashboard';
import Profile from '../screens/components/Laboga/Profile';
import Home from '../screens/components/Laboga/Home';
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

const BottomTabs = ({route}) => {
  console.log(route, "route name")
  return (
    <Tab.Navigator
    initialRouteName="profile"
      // screenOptions={({route}) =>({
      //   tabBarIcon: ({ focused, color, size }) =>{
      //     let iconName;
      //     if(route.name === "home"){
      //       iconName = focused ? "add" : "add-circle"
      //     } else if(route.name === "dashboard"){
      //       iconName = focused ? "bluetooth" : "bluetooth-outline"
      //     } else if(route.name === "profile"){
      //       iconName = focused ? "body" : "body-outline"
      //     }
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor:"tomato",
      //   tabBarInactiveTintColor: "gray",
      // })}
    >
       <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown:false
        }}
        
      />
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown:false
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown:false
        }}
      />
     
    </Tab.Navigator>
  )
}

export default BottomTabs