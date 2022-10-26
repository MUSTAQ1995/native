import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F2E7D3" />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})
export default Loader