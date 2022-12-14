import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useFormik } from "formik";
import * as Yup from "yup";
import storage from "@react-native-firebase/storage";
import { update_profile } from '../../../../redux/actions/signup.action';

const SchemaValidation = Yup.object().shape({
  mobileNumber: Yup.string()
    .required("Phone Number is required")
    .min(9, "At leasr 9 digits should be there")
    .max(11, "Maximum of 11 digits can be used"),
  firstName: Yup.string()
    .required("First Name is required")
    .max(30, "Maximum of 30 words you can use"),
  lastName: Yup.string()
    .required("Last Name is required")
    .max(30, "Maximum of 30 words you can use"),
})


const EditProfile = ({ route, navigation }) => {
  const [details, setDetails] = useState("");
  const [number, onChangeNumber] = useState(null);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("")
  const [imageDetails, setImageDetails] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [isdisable, setIsDisable] = useState(true);

  const {  userDetails } = route.params;


  const initialValues = {
    firstName: userDetails ? userDetails.response.first_name : "",
    lastName: userDetails ? userDetails.response.last_name : "",
    mobileNumber: userDetails ? userDetails.response.mobile_number : "",
    description: userDetails ? userDetails.response.description : "",
    ar_description: userDetails ? userDetails.response.ar_description : ""
    ,
  }

  const formik = useFormik({
    initialValues,
    validationSchema: SchemaValidation,
    onSubmit: values => {
      const data = {
        "registerd_from": "1",
        "first_name": values.firstName,
        "last_name": values.lastName,
        "details": values.description,
        "ar_details": values.ar_description,
        "mobile_number": values.mobileNumber,
        "country_code": userDetails.response.country_code,
        "email_id":  userDetails.response.email_id,
        "profile_image": imageURL,
        "description": values.description,
        "ar_description": values.ar_description,
      }
      update_profile(data)
      .then(res => {
        if(res.data.status === true) {
          navigation.goBack()
        }
        console.log(res.data, "response after submitting the details")
      }) 
      .catch(e => {
        console.log(e, "error while updating user details")
      })
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
      console.log(data.assets[0].uri, "image")
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
          <Text style={styles.text} >MOBILE NO</Text>
          <TextInput
            id="mobileNumber"
            name="mobileNumber"
            style={[styles.first_input, styles.text_input]}
            value={formik.values.mobileNumber}
            onChangeText={formik.handleChange("mobileNumber")}
            onBlur={formik.handleBlur("mobileNumber")}
            placeholder='Enter Your Mobile Number'
            keyboardType="numeric"
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && <Text style={styles.error} >{formik.errors.mobileNumber}</Text>}
        </View>
        <View style={styles.divider} ></View>
        <View style={{ height: 18, width: "100%", marginTop: 20 }} >
          <Text style={styles.about_text}>ABOUT US</Text>
        </View>
        <View style={styles.abt_eng} >
          <Text style={styles.text} >IN ENGLISH</Text>
          <TextInput
            name="description"
            id="description"
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
            name="ar_description"
            id="ar_description"
            style={[styles.first_input, styles.text_input]}
            value={formik.values.ar_description}
            onChangeText={formik.handleChange("ar_description")}
            placeholder='Enter Details'
            multiline
            numberOfLines={4}
          />
        </View>
        <TouchableOpacity
          onPress={formik.handleSubmit}
          disabled={!formik.isValid}
          style={formik.isValid ? styles.submit : styles.deactive} >
          <Text style={styles.text}>SUBMIT</Text>
        </TouchableOpacity>
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

export default EditProfile;