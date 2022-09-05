import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View, TextInput, Button } from 'react-native'


const KeyboardAvoid = () => {
  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === "ios" ? "padding" : "height" }
      style={ styles.container }
    >
      <TouchableWithoutFeedback  >
        <View style={styles.inner} >
          <Text style={styles.header} > Header </Text>
          <TextInput 
            placeholder='Username'
            style={styles.textinput}
          />
          <View style={styles.btnContainer} > 
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
  },
  inner: {
    padding: 24,
    flex:1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textinput: {
    height:40,
    borderColor: "#000",
    borderBottomWidth:1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "White",
    marginTop:12,
  },
});

export default KeyboardAvoid;