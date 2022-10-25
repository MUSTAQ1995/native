import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Abaya from './Abaya';
import Dresses from './Dresses';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MyProduct = ({productList}) => {
  
  return (
    <Tab.Navigator
      initialRouteName='neworders'
      screenOptions={{
        tabBarActiveTintColor: '#57504B',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarIndicatorStyle: { backgroundColor: "#E2D7C2" }
      }}
    >
      <Tab.Screen
        name="abayas"
        // component={Abaya}
        children={() => <Abaya productList={productList} />}
        options={{ tabBarLabel: "Abaya" }}
      />
      <Tab.Screen
        name="dresses"
        component={Dresses}
        options={{ tabBarLabel: "dressse" }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MyProduct