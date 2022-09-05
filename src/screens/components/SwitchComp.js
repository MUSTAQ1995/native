import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Switch, Button } from 'react-native'

const SwitchComp = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  return (
    <SafeAreaView style={styles.container} >
      <Switch 
        trackColor={{ false: "#767577", true: "#81b0ff"}}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button 
        title="next page"
        onPress={()=> navigation.navigate("Contacts")}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default SwitchComp;