import React from 'react'
import { View, Text, FlatList, StyleSheet,Image, TouchableOpacity } from 'react-native';
// import { Card } from "react-native-p"

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Abaya = ({ navigation }) => {


  const gotoSingleProduct = () => {
    navigation.navigate("singleproduct")
    // console.log("Dingel product details")
  };
  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
        numColumns={2}
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return(
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => gotoSingleProduct()}
            >
            <View >
              <Image 
                source={require("../../../../assets/lagoba_assets/bckgn.png")}
                style={styles.pic}
              />
              <Text style={styles.mannat} >Mannat</Text>
              <Text style={styles.category} >Printed Solid Border Blue Hijab</Text>
              <Text style={styles.price}>$745</Text>
            </View>
            </TouchableOpacity>
          )
        }}

      />
      <View style={styles.sort_filter} >
        <View style={{
          flexDirection:"row",
          justifyContent:"center",
        }}>
          <Image
            source={require("../../../../assets/lagoba_assets/sort.png")}
            style={{
              height:18,
              width:13.44,
              marginRight:11
            }}
          />
          <Text>Sort</Text>
        </View>
        <View
        style={{
          flexDirection:"row",
          justifyContent:"center",
        }}
        >
          <Image
            source={require("../../../../assets/lagoba_assets/sort.png")}
            style={{
              height:18,
              width:13.44,
              marginRight:11
            }}
          />
          <Text >Filter</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    position:"relative"
  },
  item:{
    height:285,
    width:"50%",
    marginTop:26,
    paddingHorizontal:8,
    // backgroundColor:"lightgray"
  },
  grid:{
    // marginTop:26,
    paddingHorizontal:16,
    alignItems:"center",
    // height:557
  },
  pic:{
    height:207,
    width:"100%"
  },
  mannat:{
    height:13,
    fontSize:12,
    marginTop:13,
    fontWeight:"bold",
    color:"#57504B"
  },
  category:{
    height:11,
    fontSize:10,
    marginTop:8,
    color:"#57504B",
    fontWeight:"bold",
  },
  price:{
    height:21,
    fontSize:18,
    marginTop:10,
    color:"#57504B",
    fontWeight:"bold",
  },
  sort_filter:{
   height:58,
   position:"absolute",
   bottom:0,
   flexDirection:"row",
   borderTopWidth:1,
   borderTopColor:"#0000001C",
   alignItems:"center",
   justifyContent:"space-around",
   width:"100%", 
  backgroundColor:"#fff"
  }
})

export default Abaya