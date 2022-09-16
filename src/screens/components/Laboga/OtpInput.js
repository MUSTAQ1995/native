import React, { useState, useRef } from 'react';
import {
  View, 
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from 'react-native-phone-number-input';

const OtpInput = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container} >
        {showMessage && (
          <View style={styles.message} >
            <Text>Value: {value}</Text>
            <Text>Formatted Value:{formattedValue}</Text>
            <Text>Valid: {valid ? "true": "false"}</Text>
          </View>
        )}
        <PhoneInput 
          ref={phoneInput}
          defaultValue={value}
          defaultCode="IN"
          layout='first'
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text)=>{
            setFormattedValue(text)
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{
            const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false )
          }}
        >
          <Text>Check</Text>
        </TouchableOpacity>
      </View>
    </>
   
  )
}

const styles = StyleSheet.create({

})

export default OtpInput