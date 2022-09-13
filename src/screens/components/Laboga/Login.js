import React, {useState} from 'react'
import { 
  View, 
  StyleSheet, 
  Text, Image, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Alert,
  ImageBackground,
 } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import CountryCode from './CountryCode';


const Login = ({ navigation }) => {

  //  states:
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [countryCallingCode, setCountryCallingCode] = useState("+966");
  
  //  -------------------------------------------
  // handlers:
  const getPhoneNumber = (e) => {
    setPhoneNumber(e)
    console.log(e,"Phonen number shgould be display")
  }

  const gotoVerification =() => {
    if(countryCallingCode &&phoneNumber){
      navigation.navigate("verify", {
        code: countryCallingCode,
        number: phoneNumber,
      });
    } else {
      Alert.alert("Enter Proper Number")
    }
  };
console.log(countryCallingCode, "calling code");
  // -----------------------------------------------------------
  return (
    <ImageBackground
      source={require("../../../assets/lagoba_assets/bckgn.png")}
      style={styles.bckgn}
    >
      <View style={styles.container} >
          <Image 
            style={styles.pic}
            source={require("../../../assets/lagoba_assets/Login.png")}
          />
          <KeyboardAvoidingView 
            behavior="padding"       
            style={{flex: 1 }}
          >
            <View style={styles.login} >
              <Text  style={styles.account}>Login account</Text>
              <View style={styles.input_view} >
                <View style={styles.county_code} >
                  <CountryCode  setCallingCode={setCountryCallingCode}/>
                </View>
                <TextInput 
                  style={styles.text_input}
                  value={phoneNumber}
                  placeholder="Enter Your mobile Number"
                  keyboardType="numeric"
                  onChangeText={(e) =>getPhoneNumber(e)}
                  autoFocus={false}
                  maxLength={10}
                />
              </View> 
              <TouchableOpacity
                  style={styles.button}
                  onPress={()=> gotoVerification()}
                >
                  <Text style={styles.next} >Next</Text>
                </TouchableOpacity>
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
    position:"relative",
  },
  pic: {
    width: 182,
    height: 152,
    marginTop: 138,
    resizeMode: "cover",
    alignSelf:"center"
  },
  login: {
    width:"100%",
    height:272,
    backgroundColor:"#fff",
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    position:"absolute",
    bottom:0,
  },
  account: {
    width:143,
    fontSize:20,
    fontWeight: "bold",
    alignContent:"center",
    marginHorizontal:"35%",
    marginTop: 58,
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
    width:"75%",
    color:"black",
  },
  button: {
      marginTop: 16,
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
    justifyContent:"center",
    width:"25%",
  }
})

export default Login