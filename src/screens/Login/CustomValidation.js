import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native'

const CustomValidation = () => {

  const [email, setEmail] =  useState("");

  const handleSubmit = text => {
    console.log(text);
    setEmail(text);
  };


  return (
    <SafeAreaView>
      <TextInput 
        onChangeText={(text) => handleSubmit(text) }
        value={email}
        placeholder="Enter your email"
        style={styles.emailInput}
      />
      <TouchableHighlight onPress={handleSubmit} style={styles.button} >
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emailInput: {
    // width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
    padding: 2,
    margin: 10,
  },
  button: {
    backgroundColor: "lightgreen",
    borderRadius: 15,
    marginTop: 25,
    padding: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "White",
  },
});

export default CustomValidation;