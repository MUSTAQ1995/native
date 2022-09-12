import React, {useState} from 'react'
import { 
  View, 
  StyleSheet, 
  Text, Image, 
  TouchableOpacity, 
  KeyboardAvoidingView
 } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {

  //  states:
  const [phoneNumber, setPhoneNumber] = useState(null);
  
  //  ----------------------------------------------------------

  // handlers:

  const getPhoneNumber = (e) => {
    console.log(e,"Phonen number shgould be display")
  }
  // -----------------------------------------------------------
  return (
    <View style={styles.container} >
        <Image 
          style={styles.pic}
          source={require("../../../assets/lagoba_assets/Login.png")}
        />
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1 }}
        >
          <View style={styles.login} >
            <Text  style={styles.account}>Login account</Text>
            <View style={styles.input_view} >
              <View>
                <Text>Code</Text>
              </View>
              <TextInput 
                style={styles.text_input}
                value={phoneNumber}
                placeholder="Enter Your mobile Number"
                keyboardType="numeric"
                onChangeText={(e) =>getPhoneNumber(e)}
                autoFocus={false}
                maxLength={14}
              />
            </View> 
            <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.next} >Next</Text>
              </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
    </View>
  )
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#57504B",
  },
  pic: {
    marginLeft: 89,
    marginRight: 89,
    width: 182,
    height: 152,
    marginTop: 138,
    resizeMode: "cover",
    backgroundColor: "#57504B",
  },
  login: {
    width:"100%",
    height:272,
    backgroundColor:"#fff",
    marginTop:157,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
  },
  account: {
    width:143,
    fontSize:20,
    fontWeight: "bold",
    marginHorizontal:108,
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
    width:"80%"
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
  }
})

export default Login