import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomDivider = () => {
  return (
    <View style={styles.container}  ></View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 16,
    height: 4,
    backgroundColor: "#EFEFEF",
    width: "100%",
    // marginLeft: -20
  }
})
export default CustomDivider