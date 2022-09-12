import React from 'react'
import { 
  View, 
  Text,
  KeyboardAvoidingView, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verify = ({ route, navigation}) => {
  const { code, number} = route.params;

  // re-send OTP:
  const resendOTP = () => {
    console.log("resend OTp")
  };

  const submitOTP = () => {
    console.log( "OTP");
    navigation.navigate("stepper")
  }
  return (
    <View style={styles.container} >
        <Image 
          style={styles.pic}
          source={require("../../../assets/lagoba_assets/verify.png")}
        />
        <KeyboardAvoidingView 
          behavior="padding"       
          style={{flex: 1 }}
        >
          <View style={styles.login} >
            <Text style={styles.account}>Verify OTP</Text>
            <View>
              <Text style={styles.display_number} >
                A verification code has been sent to
              </Text>
              <Text style={[styles.display_number, ,{ marginTop:0}]} > {` +${code} ${number}`} Icon</Text>
            </View>
            <View style={styles.otp} >
              <OTPInputView  
                style={{width: '80%', height: 80,marginHorizontal:40 }}
                pinCount={6}
                autoFocusOnLoad
                secureTextEntry
                editable
                // clearInputs22
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
              />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> submitOTP()}
            >
              <Text style={styles.next} >Next</Text>
            </TouchableOpacity>
            <View style={styles.resend} >
              <Text 
                onPress={() => resendOTP()}
                style={styles.otp_text} >
                Resend OTP
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
    </View>
  )
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#57504B",
    justifyContent:"center"
  },
  pic: {
    marginLeft: 83,
    marginRight: 83,
    width: 193.76,
    height: 72.46,
    marginTop: 101,
    resizeMode: "cover",
    backgroundColor: "#57504B",
  },
  login: {
    width:"100%",
    height:"100%",
    backgroundColor:"#fff",
    marginTop:105,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
  },
  account: {
    width:108,
    fontSize:20,
    height:22,
    fontWeight: "bold",
    marginLeft:126,
    marginTop: 58,
    color:"#57504B",
  },
  display_number :{
    marginTop:12,
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",

  },
  input_view : {
    display:"flex",
    flexDirection:"row",
    height:54,
    marginTop:29,
    marginHorizontal: 16,
    borderColor: "#DEE4E8",
    borderWidth:1,
    justifyContent:"space-around"
  },
  text_input:{
    width:"80%"
  },
  button: {
      marginTop: 15,
      padding: 10,
      height: 54,
      alignItems: "center",
      backgroundColor: "#F2E7D3",
      marginHorizontal: 16,
      justifyContent:'center', 
  },
  next : {
    color:"#57504B",
    fontWeight: "bold",
    fontFamily:12,
    fontFamily: "Gotham Pro",
    textAlign:"left"
  },
  county_code: {
    flex:1,
    justifyContent:"center"
  },
  otp: {
    marginTop: 28,
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderColor: "#57504B",
    borderBottomWidth: 2,
    color: '#000'
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  resend: {
   marginTop:26,
   justifyContent:"center"
  },
  otp_text:{
    color: "#F72F2F",
    textAlign:"center", 
    fontSize:15,
    fontWeight:"bold"
  }
})


export default Verify