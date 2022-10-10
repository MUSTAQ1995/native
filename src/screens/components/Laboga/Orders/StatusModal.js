import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StatusModal = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.processing}>PROCESSING</Text>
      <View style={{ flexDirection:"row", marginTop:32, marginHorizontal:40, justifyContent:"space-between"}} >
        <View style={styles.status_type} >
          <Text style={styles.type_text} >SHIPPED</Text>
          <Text style={styles.type_text} >OUT FOR DELIVERY</Text>
          <Text style={styles.type_text} >DELIVERED</Text>
        </View>
        <View style={styles.status} >
          <Text style={[styles.type_text,{
            color:"green",
            fontSize:10,
            textDecorationLine:"underline"
          }]}  >Select</Text>
          <Text style={[styles.type_text,{
            color:"lightgray",
            fontSize:10,
            textDecorationLine:"underline"
          }]}>Select</Text>
          <Text 
           style={[styles.type_text,{
            color:"lightgray",
            fontSize:10,
            textDecorationLine:"underline"
          }]}>Select</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:288,
  },
  processing:{
    height:13,
    fontSize:12,
    letterSpacing:1.2,
    fontWeight:"bold",
    marginTop:30,
    marginLeft:40
  },
  type_text:{
    marginBottom:33,
    height:13,
    fontSize:12,
    letterSpacing:1.2,
    color:"#57504B",
    fontWeight:"bold"
  }
})

export default StatusModal