import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const Content = [
  
  {
    "id":0,
    "name": "My Wallet",
  },
  {
    "id":1,
    "name": "Add New Products",
  },
  {
    "id":2,
    "name": "Shipping Charges",
  },
  {
    "id":3,
    "name": "Offers",
  },
  {
    "id":4,
    "name": "Settings",
  },
  {
    "id":5,
    "name": "Logout",
  },

];
const Profile = () => {
  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Image
          source={require("../../../assets/lagoba_assets/verify.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.profile_details} >
        <View style={styles.profile_pic} ></View>
          <View style={styles.name} >
            <Text style={styles.user_name} >Maya D'Suza</Text>
            <Text style={styles.cont_num} >+966551236547</Text>
          </View>
        <View>
          <Text style={styles.edit_info} >Edit</Text>
        </View>
      </View>
      <View style={styles.body} >
        <View style={styles.list_item} >
          {Content.map((list, id)=>{
            return(
              <View key={id} style={styles.listing_data} >
                <Text style={styles.name} >{list?.name}</Text>
                {/* <Text style={styles.name} >{">"}</Text> */}
                <Image 
                  source={require("../../../assets/lagoba_assets/right_arrow.png")}
                  style={{
                    width:7.4,
                    height:12
                  }}
                />
              </View>
            )
          })}
        </View>
        <View style={styles.translate} >
          <Text style={styles.trans_arbic} >Arabic</Text>
          <Image 
            source={require("../../../assets/lagoba_assets/translate.png")}
            style={styles.trans_image}
          />
          <Text style={styles.trans_eng} >English</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:744,
  },
  textstyle:{
    color:"#57504B"
  },
  logo:{
    height:30.05,
    width:111.85,
    backgroundColor:"#3B3B3B",
    marginLeft:15
  },
  profile_details:{
    marginTop:8.95,
    height:120,
    backgroundColor:"#F2E7D3",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  profile_pic:{
    height:70,
    width:70,
    backgroundColor:"lightgray",
    borderRadius:35,
  },
  user_name:{
    fontSize:24,
    fontWeight:"500"
  },
  cont_num:{
    fontSize:14,
    fontWeight:"500"
  },
  edit_info:{
    fontSize:18,
    fontWeight:"bold"
  },
  body:{
    marginTop:12,
  },
  list_item:{
    marginLeft:15,
    width:360,
    height:401,
  },
  listing_data:{
    height:64,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:5,
  },
  name:{
    color:"#57504B",
    fontSize:14,
    fontWeight:"bold"
  },
  translate:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  trans_image: {
    height:31,
    width:31,
    marginHorizontal:10,
  },
  trans_arbic:{
    fontSize:14,
    fontWeight:"bold",
    color:"#57504B"
  },
  trans_eng:{
    fontSize:14,
    fontWeight:"bold",
    color:"#E2D7C2"
  }
})

export default Profile