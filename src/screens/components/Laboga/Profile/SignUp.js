import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Button, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useFormik } from "formik";
import * as Yup from "yup";
import { checkMobile, registration } from '../../../../redux/actions/signup.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from "@react-native-firebase/storage";

const SchemaValidation = Yup.object().shape({
  email: Yup.string()
    .required("Phone Number is required"),
  firstName: Yup.string()
    .required("First Name is required")
    .max(30, "Maximum of 30 words you can use"),
  lastName: Yup.string()
    .required("Last Name is required")
    .max(30, "Maximum of 30 words you can use"),
  brand: Yup.string()
    .required("Brand name is required"),

})


const SignUp = ({ route, navigation }) => {
  const [details, setDetails] = useState("");
  const [number, onChangeNumber] = useState(null);
  const [imageDetails, setImageDetails] = useState([]);
  const [isdisable, setIsDisable] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const [promises, setPromises] = useState([]);
  const [token, setToken] = useState("");

  const { paramDetails } = route.params;

  const initialValues = {
    firstName: "",
    lastName: "",
    brand: "",
    email: "",
    description: "",
    ar_description: "",
  }

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", token)
      console.log("token is setup", token)
    } catch (e) {
      Alert.alert(e)
    }
  };

  const registerUser = (data) => {
    registration(data)
      .then((res) => {
        if (res.status === true) {
          navigation.navigate("bottomtabs")
          Alert.alert(res.response.message);
          storeToken(res.response.token)
        }
        console.log(res.response.token, "status from the response")
      })
      .catch((error) => {
        console.log(error, error)
      })
  };



  const formik = useFormik({
    initialValues,
    validationSchema: SchemaValidation,
    onSubmit: values => {
      const data = {
        "registerd_from": "1",
        "first_name": values.firstName,
        "last_name": values.lastName,
        "details": values.description,
        "ar_details": values.description,
        "vendor_name": values.brand,
        "mobile_number": paramDetails?.mobileNumber,
        "country_code": paramDetails?.countryCode,
        "email_id": values.email,
        "profile_image": imageURL,
        "description": values.description,
        "ar_description": values.ar_description,
      }
      console.log(values, "formik values")
      //  uploadImage()
      registerUser(data)
    }
  });

  const getGalleryImage = () => {
    launchImageLibrary({
      mediaType: "photo" || "video",
      maxHeight: 100,
      maxWidth: 100,
      videoQuality: "high",
      durationLimit: 30,
      quality: 1,
      cameraType: "front",
      includeBase64: true,
      saveToPhotos: true,
      selectionLimit: 0,
    }, (data) => {
      data?.assets && setImageDetails(data.assets);
      data?.assets && uploadImage()
      // setImageDetails(data.assets)
      // console.log(data.assets[0], "image")
    })
  };

  // Upload the image to firebase:
  const uploadImage = async () => {

    let counter = 0;
    const urlData = [];
    {
      imageDetails && imageDetails.map((image, index) => {
        const uploadTask = storage().ref().child(image.fileName).putFile(image.uri);
        promises.push(uploadTask)
        uploadTask.on("state_changed", taskSnapShot => {
          const progress = ((taskSnapShot.bytesTransferred / taskSnapShot.totalBytes) * 100) / 100;
        }, (error) => {
          console.log(error)
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            urlData.push(url)
            setImageURL(urlData)
            counter = counter + 1;
            if (imageDetails.length == counter) {
              checkMobile(urlData)
            }
          })
        })
      })
    }
  };


  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container} >
        {
          imageDetails?.length > 0 && imageDetails ?
            <Image
              style={styles.display_picture}
              source={{
                uri: imageDetails[0].uri
              }}
            />
            :
            <TouchableOpacity onPress={() => getGalleryImage()} >
              <Image
                style={styles.display_picture}
                source={require("../../../../assets/lagoba_assets/dp.png")}
              />
            </TouchableOpacity>
        }

        <View style={styles.edit_icon}  >
          <Icon name="edit" color="#FFF" size={14}
            onPress={() => getGalleryImage()}
          />
        </View>
        <View style={styles.first_name} >
          <Text style={styles.text} >FIRST NAME</Text>
          <TextInput
            name="firstName"
            id="firstName"
            style={[styles.first_input, styles.text_input]}
            value={formik.values.firstName}
            onChangeText={formik.handleChange('firstName')}
            onBlur={formik.handleBlur('firstName')}
            placeholder='Enter Your First Name'
          />
          {formik.touched.firstName && formik.errors.firstName && <Text style={styles.error} >{formik.errors.firstName}</Text>}
        </View>
        <View style={styles.first_name} >
          <Text style={styles.text} >LAST NAME</Text>
          <TextInput
            id="lastName"
            name="lastName"
            style={[styles.first_input, styles.text_input]}
            value={formik.values.lastName}
            onChangeText={formik.handleChange("lastName")}
            onBlur={formik.handleBlur("lastName")}
            placeholder='Enter Your Last Name'
          />
          {formik.touched.lastName && formik.errors.lastName && <Text style={styles.error} >{formik.errors.lastName}</Text>}
        </View>
        <View style={styles.first_name} >
          <Text style={styles.text} >BRAND NAME</Text>
          <TextInput
            id="brand"
            name="brand"
            style={[styles.first_input, styles.text_input]}
            value={formik.values.brand}
            onChangeText={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            placeholder='Enter your brand name'
            keyboardType="email-address"
          />
          {formik.touched.brand && formik.errors.brand && <Text style={styles.error} >{formik.errors.brand}</Text>}
        </View>
        <View style={styles.first_name} >
          <Text style={styles.text} >EMAIL ID</Text>
          <TextInput
            id="email"
            name="email"
            style={[styles.first_input, styles.text_input]}
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            placeholder='Enter your email ID'
            keyboardType="email-address"
          />
          {formik.touched.email && formik.errors.email && <Text style={styles.error} >{formik.errors.email}</Text>}
        </View>
        <View style={styles.divider} ></View>
        <View style={{ height: 18, width: "100%", marginTop: 20 }} >
          <Text style={styles.about_text}>TELL US ABOUT YOURSELF</Text>
        </View>
        <View style={styles.abt_eng} >
          <Text style={styles.text} >IN ENGLISH</Text>
          <TextInput
            style={[styles.first_input, styles.text_input]}
            value={formik.values.description}
            onChangeText={formik.handleChange("description")}
            placeholder='Enter Details'
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={styles.abt_eng} >
          <Text style={styles.text} >IN ARABIC</Text>
          <TextInput
            style={[styles.first_input, styles.text_input]}
            value={formik.values.ar_description}
            onChangeText={formik.handleChange("ar_description")}
            placeholder='Enter Details'
            multiline
            numberOfLines={4}
          />
        </View>
        <TouchableOpacity
          onPress={() => formik.handleSubmit()}
          // disabled={!formik.isValid}
          style={formik.isValid ? styles.submit : styles.deactive} >
          <Text style={styles.text}>SUBMIT</Text>
        </TouchableOpacity>
        {/* <Button 
        title="File upload"
        onPress={() => uploadImage()}
      /> */}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 15,
    backgroundColor: "#FFF"
  },
  text: {
    fontWeight: "bold",
    color: "#57504B"
  },
  display_picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F2E7D3",
    marginTop: 22,
  },
  edit_icon: {
    height: 24,
    width: 24,
    borderRadius: 12,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    top: 70,
    right: 185,
  },
  first_name: {
    height: 71,
    marginTop: 22,
    width: "100%"
  },
  text: {
    height: 13,
    fontSize: 12,
    color: "#57504B",
    fontWeight: "bold",
    letterSpacing: 1.2
  },
  text_input: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#DEE4E8",
    color: "#000",
    borderRadius: 10,
  },
  first_input: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "bold",
    color: "#DEE4E8",
    paddingLeft: 17.5,
    letterSpacing: 1.2,
  },
  divider: {
    width: "100%",
    height: 4,
    backgroundColor: "#DEE4E8",
    marginTop: 17,
  },
  about_text: {
    fontSize: 16,
    color: "#57504B",
    fontWeight: "bold",
    letterSpacing: 0.32,
  },
  abt_eng: {
    width: "100%",
    marginTop: 22
  },
  submit: {
    marginTop: 18,
    width: "100%",
    height: 54,
    backgroundColor: "#F2E7D3",
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  deactive: {
    marginTop: 18,
    width: "100%",
    height: 54,
    backgroundColor: "lightgray",
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    color: "red",
    // marginVertical:5,
    fontWeight: "bold"
  }
})

export default SignUp;