import React from "react";
import { Text, View, StyleSheet } from "react-native"

const CustomMarker = () => {
  return (
    <View style={styles.marker} >
      <Text style={styles.text} >Tokyo</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor:"#007bff",
    borderColor:"#eee",
    borderRadius: 5,
    elevation: 10,
  },
  text: {
    color:"#fff",
  },
})

export default CustomMarker