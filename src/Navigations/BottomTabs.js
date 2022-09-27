import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/components/Laboga/Dashboard';
import Profile from '../screens/components/Laboga/Profile';
import Home from '../screens/components/Laboga/Home';
import Icon from "react-native-vector-icons/Ionicons";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomTabs = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="profile"
      screenOptions={({route}) =>({
        tabBarIcon: ({ focused, color, size }) =>{
          let iconName;
          if(route.name === "home"){
            iconName = focused ? "home" : "home"
          } else if(route.name === "dashboard"){
            iconName = focused ? "grid" : "grid"
          } else if(route.name === "profile"){
            iconName = focused ? "person" : "person"
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:"black",
        tabBarInactiveTintColor: "gray",
      })}
    >
       <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel:"Home",
        }}
        
      />
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel:"Dashboarfd",
          headerShown:false
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown:false,
          tabBarLabel:"Profile",
        }}
      />
     
    </Tab.Navigator>
  )
}

export default BottomTabs