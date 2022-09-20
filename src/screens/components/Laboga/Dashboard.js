import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Dashboard = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.textstyle} >Dashboard.....</Text>
    </View>
  )
};


const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  textstyle:{
    color:"#57504B"
  }
})

export default Dashboard