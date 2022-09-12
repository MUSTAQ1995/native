import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Header = ({ navigation }) => {
  return (
   <View style={styles.container} >
      <Text>Welcome to Header</Text>
      <Button
        title= "go back"
        onPress={() => navigation.goBack()}
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent: "center",
  }
})

export default Header