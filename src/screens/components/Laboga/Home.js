import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'

const Home = ({ navigation }) => {

  const handelAddProjects = () => {
    navigation.navigate("addproducts");
    console.log("Navigate ti the add product page")
  };
  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Image
          source={require("../../../assets/lagoba_assets/logo_white.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.body} >
        <Image 
          style={styles.cloth_hanger}
          source={require("../../../assets/lagoba_assets/clothes-hanger.png")}
        />
        <Text style={styles.looks_empty} >Looks Empty</Text>
        <Text style={styles.add_some_products} >let's add some products</Text>
        <TouchableOpacity 
          style={styles.add_products}
          onPress={handelAddProjects} >
          <Text style={styles.add_product_text} >
            ADD PRODUCTS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};


const styles= StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:16,
    backgroundColor:"#FFF"
  },
  header:{
    backgroundColor:"#FAFAF8",
    marginTop:5
  },
  logo:{
    height:30,
    width:112,
  },
  body:{
    alignItems:"center",
  },
  cloth_hanger:{
    height:83.5,
    width:112,
    marginTop:124,
  },
  looks_empty:{
    width:132,
    // height:23,
    marginTop:21.6,
    fontSize:20,
    fontWeight:"bold",
    color:"#57504B",
    textAlign:"center"
  },
  add_some_products:{
    marginTop:5,
    width:194,
    height:18,
    fontSize:16,
    color:"#57504B",
    textAlign:"center",
    fontWeight:"600"
  },
  add_products:{
    marginTop:86,
    height:56,
    width:188,
    backgroundColor:"#F2E7D3",
    alignItems:"center",
    justifyContent:"center"
  },
  add_product_text:{
    
    height:15,
    width:116,
    color:"#57504B",
    fontWeight:"bold"
  }
})

export default Home