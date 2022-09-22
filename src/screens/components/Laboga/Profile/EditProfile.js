import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialIcons';

const EditProfile = () => {
  const [details, setDetails] = useState("");
  const [number, onChangeNumber] = useState(null);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container} >
        <Image
          style={styles.display_picture}
          source={require("../../../../assets/lagoba_assets/dp.png")}
        />
        <View style={styles.edit_icon} >
           <Icon name="edit" color="#FFF" size={14} />
        </View>
        <View style={styles.first_name} >
          <Text style={styles.text} >FIRST NAME</Text>
          <TextInput 
            style={[styles.first_input, styles.text_input]}
            value={number}
            onChangeText={onChangeNumber}
            placeholder='Enter Your First Name'
          />
        </View>
        <View style={styles.first_name} >
          <Text style={styles.text} >LAST NAME</Text>
          <TextInput 
            style={[styles.first_input, styles.text_input]}
            value={number}
            onChangeText={onChangeNumber}
            placeholder='Enter Your Last Name'
          />
        </View>
        <View style={styles.first_name} >
          <Text style={styles.text} >MOBILE NO</Text>
          <TextInput 
            style={[styles.first_input, styles.text_input]}
            value={number}
            onChangeText={onChangeNumber}
            placeholder='Enter Your Mobile Number'
          />
        </View>
        <View style={styles.divider} ></View>
        <View style={{height:18, width:"100%",  marginTop:20}} >
          <Text style={styles.about_text}>ABOUT US</Text>
        </View>
        <View style={styles.abt_eng} >
          <Text style={styles.text} >IN ENGLISH</Text>
          <TextInput 
             style={[styles.first_input, styles.text_input]}
             value={details}
             onChangeText={setDetails}
             placeholder='Enter Details'
             multiline
             numberOfLines={4}
          />
        </View>
        <View style={styles.abt_eng} >
          <Text style={styles.text} >IN ARABIC</Text>
          <TextInput 
             style={[styles.first_input, styles.text_input]}
             value={details}
             onChangeText={setDetails}
             placeholder='Enter Details'
             multiline
             numberOfLines={4}
          />
        </View>
        <TouchableOpacity style={styles.submit} >
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
    position:"relative",
    paddingHorizontal:15,
    backgroundColor:"#FFF"
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
  edit_icon:{
    height:24,
    width:24,
    borderRadius:12,
    position:"absolute",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#000",
    top:70,
    right:155,
  },
  first_name:{
    height:71,
    marginTop:22,
    width:"100%"
  },
  text:{
    height:13,
    fontSize:12,
    color:"#57504B",
    fontWeight:"bold",
    letterSpacing:1.2
  },
  text_input:{
    marginTop:6,
    borderWidth:1,
    borderColor:"#DEE4E8",
  },
  first_input:{
    marginTop:6,
    fontSize:14,
    fontWeight:"bold",
    color:"#DEE4E8",
    paddingLeft:17.5,
    letterSpacing:1.2,
  },
  divider:{
    width:"100%",
    height:4,
    backgroundColor:"#DEE4E8",
    marginTop:17,
  },
  about_text:{
    fontSize:16,
    color:"#57504B",
    fontWeight:"bold",
    letterSpacing:0.32,
  },
  abt_eng:{
    width:"100%",
    marginTop:22
  },
  submit:{
    marginTop:18,
    width:"100%",
    height:54,
    backgroundColor:"#F2E7D3",
    marginBottom:24,
    alignItems:"center",
    justifyContent:"center"
  }
})

export default EditProfile;