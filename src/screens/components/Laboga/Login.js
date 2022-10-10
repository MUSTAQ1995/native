import React, { useState, useRef, useEffect } from 'react'
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
import { Formik } from 'formik';
import * as yup from "yup";
import { checkMobile, getOtp } from '../../../redux/actions/signup.action';


const SchemaValidation = yup.object().shape({
  mobileNumber: yup
    .string()
    .required("Phone number is Required")
    .min(9,"At least 9 digits should be there")
    .max(11, "Maximum of 11 digits can be used")
})

const Login = ({ navigation, route }) => {

  //  states:
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [countryCallingCode, setCountryCallingCode] = useState("91");
  const [isdisable, setIsDisable] = useState(true);
  const [maxiMumLength, setMaxiMumLength] = useState(10);
  const [errorMessage, setErrorMessage] = useState("Enter a Valid Number");
  const [invalid, setInvalid] = useState(true);
  
  const formikRef = useRef(null);
  const defaultSelect = useRef(null);

  const initialData = {
    mobileNumber:phoneNumber,
  }
  //  -------------------------------------------

  // handlers:
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (formikRef?.current) {
        setPhoneNumber(phoneNumber)
        formikRef.current.values = initialData
        formikRef.current.setErrors({});
        formikRef.current.setFieldValue("mobileNumber", phoneNumber);
        formikRef.current.setFieldTouched("mobileNumber", false)
        // setIsDisable(false)
      }
    })
  }, [navigation, initialData]);

  useEffect(() =>{
    formikRef.current.setFieldValue("mobileNumber","");
    formikRef.current.setFieldTouched("mobileNumber",false);
    setIsDisable(true)
  }, [countryCallingCode])

  const handleValidate = (e) =>{
    formikRef.current.setFieldValue("mobileNumber",e)
    
    //Regular Expressions: for number matching,
    let re1 = new RegExp(/^[0]{1}[5]{2}[0-9]{7}$/);
    let re2 = new RegExp(/^[5]{2}[0-9]{7}$/);

    let Saudi = new RegExp(re1.source +"|"+ re2.source);

    setInvalid(!Saudi.test(e));
    formikRef.current.setFieldTouched("mobileNumber", true)
    if((countryCallingCode == "966") && (Saudi.test(e))){
      re2.test(e)  && setMaxiMumLength(9) 
      setIsDisable(false)
    } else { 
      setMaxiMumLength(10)
      setIsDisable(true)}
    if(countryCallingCode == "91"){
      if((e.length >= 10) && (e[0] >= 6)){
        setIsDisable(false)
      } else {setIsDisable(true)}
    }
    setPhoneNumber(e)
  }

  const gotoVerification =(values) => {
    // if(countryCallingCode && values.mobileNumber ){

    //   getOtp({
    //     "country_code":countryCallingCode,
    //     "mobile_number":values.mobileNumber
    //   })
    //   navigation.navigate("verify", {
    //     code: countryCallingCode,
    //     number: phoneNumber,
    //   });
    // } else {
    //   Alert.alert("Enter Proper Number")
    // }
    navigation.navigate("verify", {
      code: countryCallingCode,
      number: phoneNumber,
    });
  };
  // ---------------------------------------------------------

  return (

    <ImageBackground
      source={require("../../../assets/lagoba_assets/bckgn.png")}
      style={styles.bckgn}
    >
      <Formik
        innerRef={formikRef}
        initialValues={initialData}
        validationSchema={SchemaValidation}
        onSubmit={(values, { resetForm, setErrors}) => (
          gotoVerification(values),
          resetForm({ values: ""}),
          setErrors({})
        )}
      >
        {({ handleSubmit, errors, values, handleChange, handleBlur, touched }) => (
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
                  name="mobileNumber"
                  maxLength={maxiMumLength}
                  ref={defaultSelect}
                  keyboardType="numeric"
                  style={styles.text_input}
                  value={values.mobileNumber}
                  onBlur={handleBlur("mobileNumber")}
                  placeholder="Enter Your Mobile Number"
                  onChangeText={handleValidate}
                />
               
              </View> 
              {  touched.mobileNumber && invalid && <Text style={styles.error} >{errorMessage}</Text>}
              <TouchableOpacity
                  disabled={isdisable}
                  style={isdisable ? styles.disable : styles.button}
                  onPress={handleSubmit}
                  activeOpacity={1}
                >
                  <Text style={styles.next} >Next</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
      </View>
        )}
      </Formik>
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
      marginTop: 10,
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
  },
  error: {
    color: "red", 
    textAlign:"center",
    marginHorizontal: 16,
    marginTop:5,
  },
  disable: {
    marginTop: 10,
    padding: 10,
    height: 54,
    alignItems: "center",
    backgroundColor: "lightgray",
    marginHorizontal: 16,
    justifyContent:'center', 
  }
})

export default Login