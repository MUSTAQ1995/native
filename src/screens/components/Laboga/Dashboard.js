import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const Dashboard = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.textstyle} >Home Page</Text>
      <Icon name="person" color="#4F8EF7" size={50} />
      <Text style={styles.textstyle} >Welcome to the Native world....</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  textstyle:{
    color:"#57504B",
    fontSize:21,
    fontFamily:"DancingScript-VariableFont_wght"
  }
})

export default Dashboard;