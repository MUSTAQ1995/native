import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewOrders from "./NewOrders";
import InTransit from "./InTransit";
import Delivered from "./Delivered";


const Tab = createMaterialTopTabNavigator();
const AllOrders = () => {
  return (
  <Tab.Navigator
    initialRouteName='neworders'
    screenOptions={{
      tabBarActiveTintColor: '#57504B',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: '#FFFFFF' },
      tabBarIndicatorStyle:{ backgroundColor:"#E2D7C2"}
    }}
  >
    <Tab.Screen 
      name="neworders"
      component={NewOrders}
      options={{ tabBarLabel:"New Orders"}}
    />
    <Tab.Screen 
      name="intransit"
      component={InTransit}
      options={{ tabBarLabel:"InTransit"}}
    />
    <Tab.Screen 
      name="delivered"
      component={Delivered}
      options={{ tabBarLabel:"Delivered"}}
    />
  </Tab.Navigator>
  )
}

export default AllOrders;
