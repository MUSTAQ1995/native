import React from 'react'
import { View, Text, FlatList, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Abaya = ({  productList }) => {
  const navigation = useNavigation()


  const gotoSingleProduct = (parent_sku) => {
    navigation.navigate("singleproduct", {productID:parent_sku  })
  };

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
        numColumns={2}
        data={productList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return(
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => gotoSingleProduct(item.parent_sku)}
            >
            <View >
              <Image 
                source={{
                  uri: item?.image
                }}
                style={styles.pic}
              />
              <Text style={styles.mannat} >{item.title}</Text>
              <Text style={styles.category} >{item.discription}</Text>
              <Text style={styles.price}>{item.currency} {item.price}</Text>
            </View>
            </TouchableOpacity>
          )
        }}

      />
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
  },
  grid:{
    paddingHorizontal:16,
    alignItems:"center",
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
})

export default Abaya