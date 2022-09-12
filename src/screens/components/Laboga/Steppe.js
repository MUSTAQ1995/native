import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

const Steppe = () => {
  return (
    <View style={styles.conatiner} >
      <Text>Stepper should be hera</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    borderColor:"#000",
    borderWidth:1,
  }
})
export default Steppe