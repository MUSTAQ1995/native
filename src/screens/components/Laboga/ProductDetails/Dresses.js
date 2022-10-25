
import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet,Image, TouchableOpacity } from 'react-native';
import Loader from '../Reusable/Loader';
import EmptyProduct from '../EmptyProduct';
import { getProductList } from '../../../../redux/actions/signup.action';

const Dresses = ({ navigation }) => {
  const [productList, setProductLIst] = useState(null);
  useFocusEffect(
    useCallback(() => {
      getProductList(2)
        .then(res => {
          console.log(res.data, "ressssssssssssssssssssss")
          setProductLIst(res.data.response.products)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])
  )
  const gotoSingleProduct = () => {
    navigation.navigate("singleproduct")
  };

  return (
    <>
      {!productList ? <Loader/> :
        productList.length == 0 ? <EmptyProduct /> : 
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
                onPress={() => gotoSingleProduct()}
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
      }
    </>
   
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

export default Dresses