import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, SafeAreaView, StatusBar,Platform, Button } from 'react-native'
// import Geolocation from "react-native-geolocation-service";

const STYLES  = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];


const Status = () => {

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

  // useEffect(() => {
  //     Geolocation.getCurrentPosition(position => {
  //       console.log(position);
  //     },
  //     (error) =>{
  //       console.log(error.code, error.message)
  //     },
  //     { enableHighAccuracy:true, timeout:1500, maximumAge:10000}
  //     )
  // }, [])

  const changeStatusBarVisibility = () => {
    setHidden(!hidden);
  };

  const changeStatusBarStyle = () => {
    const styleID = STYLES.indexOf(statusBarStyle) + 1;
    if (styleID === STYLES.length){
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleID])
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if(transition === TRANSITIONS.length){
      setStatusBarTransition(TRANSITIONS[0])
    } else {
      setStatusBarTransition(TRANSITIONS[transition])
    }
  };

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar 
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Text style={styles.textStyle} >
        Status Bar Visibility:{"\n"}
        {hidden ? "Hidden" : "Visible"}
      </Text>
      <Text style={styles.textStyle} >
        StatusBar Style: {"\n"}
        {statusBarStyle}
      </Text>
      {Platform.OS === "ios" ?(
        <Text style={styles.textStyle} >
          StatusBar Style:{"\n"}
          {statusBarTransition}
        </Text>
      ): null}
      <View style={styles.buttonsContainer} >
        <Button 
          title='Toggle StatusBar'
          onPress={changeStatusBarVisibility}
        />
        <Button
          title="Change StatusBar Style"
          onPress={changeStatusBarStyle}
        />
        {Platform.OS === "ios" ? (
          <Button 
            title='Change StatusBar Transition'
            onPress={changeStatusBarTransition}
          /> 
        ): null}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: "#ECF0F1",
    alignItems:"center"
  },
  buttonsContainer : {
    padding: 10
  },
  textStyle : {
    textAlign: "center",
    marginBottom: 8
  }
});

export default Status;