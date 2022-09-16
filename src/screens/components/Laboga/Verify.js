import React, { useState } from 'react'
import { 
  View, 
  Text,
  KeyboardAvoidingView, 
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

const Verify = ({ route, navigation}) => {
  const { code, number} = route.params;

  const paramDetails = {
    countryCode: code,
    mobileNumber:number,
  }

  const [isdisable, setIsDisable] = useState(true);
  
  // re-send OTP:
  const resendOTP = () => {
    console.log("resend OTp")
  };

  const handleOTP = code => {
    if(code.length >= 6){
      setIsDisable(false)
    } else(setIsDisable(true))
  }
  const submitOTP = () => {
    navigation.navigate("stepper")
  };

  const handleEditNumber = () => {
    navigation.goBack("login");
  };

  return (
    <ImageBackground
      source={require("../../../assets/lagoba_assets/bckgn.png")}
      style={styles.bckgn}
    >
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
                <View style={{ display:"flex",flexDirection:"row", justifyContent:"center"}} >
                  <Text style={[styles.display_number, ,{ marginTop:0}]} > {` +${paramDetails.countryCode} ${paramDetails.mobileNumber}`} </Text>
                  <TouchableOpacity onPress={() => handleEditNumber()} >
                    <Image 
                      source={require("../../../assets/lagoba_assets/edit.png")}
                      style={{height:15, width:15, marginTop:5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View  >
                <OtpInputs 
                  handleChange={(code)=>handleOTP(code)}
                  numberOfInputs={6}
                  defaultValue=""
                  secureTextEntry={true}
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    height:50,
                  }}
                  inputContainerStyles={{

                    color:"black",
                    marginEnd:10,
              
                  }}
                  inputStyles={{
                    textAlign:"center",
                    color:"#57504B",
                    borderBottomColor:"#57504B",
                    borderBottomWidth:2,
                  }}
                  focusStyles={{
                    backgroundColor:"lightgray22"
                  }}
                />
              </View>
              <TouchableOpacity
                  disabled={isdisable}
                  style={isdisable? styles.disable:styles.button}
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
    </ImageBackground>
  )
};

const styles= StyleSheet.create({
  bckgn:{
    flex:1,
    width:"100%",
    height:"100%"
  },
  container: {
    flex: 1,
    justifyContent:"center",
    position:"relative"
  },
  pic: {
    width: 193.76,
    height: 72.46,
    marginHorizontal:"25%",
    marginTop: 101,
    resizeMode: "cover",
  },
  login: {
    width:"100%",
    backgroundColor:"#fff",
    marginTop:105,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    position:"absolute",
    bottom:0,
  },
  account: {
    width:108,
    fontSize:20,
    height:22,
    fontWeight: "bold",
    marginHorizontal:"40%",
    marginTop: 58,
    color:"#57504B",
  },
  display_number :{
    marginTop:12,
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"#57504B"

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

  disable: {
    marginTop: 10,
    padding: 10,
    height: 54,
    alignItems: "center",
    backgroundColor: "lightgray",
    marginHorizontal: 16,
    justifyContent:'center', 
  },
  resend: {
   marginTop:26,
   justifyContent:"center",
   marginBottom:47,
  },
  otp_text:{
    color: "#F72F2F",
    textAlign:"center", 
    fontSize:15,
    fontWeight:"bold"
  }
})


export default Verify