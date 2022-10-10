import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/components/Laboga/Home';
import Profile from '../screens/components/Laboga/Profile';
import Dashboard from '../screens/components/Laboga/Dashboard';
import Icon from "react-native-vector-icons/Ionicons";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomTabs = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="home"
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
          tabBarLabel:"Home",
          headerShown:false
        }}
      />
       <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown:false,
          tabBarLabel:"Dashboarfd",
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