import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const transactionDetails = [
  {
    "id":0,
    "product_name": "HIJAB",
    "product_price": "SAR 999",
    "transaction_id": "#131351",
    "transaction_time": "1:00 PM",
    "transaction_date": "21/10/22",
  },
  {
    "id":1,
    "product_name": "HIJAB",
    "product_price": "SAR 999",
    "transaction_id": "#131351",
    "transaction_time": "1:00 PM",
    "transaction_date": "21/10/22",
  },
  {
    "id":2,
    "product_name": "HIJAB",
    "product_price": "SAR 999",
    "transaction_id": "#131351",
    "transaction_time": "1:00 PM",
    "transaction_date": "21/10/22",
  },
  {
    "id":3,
    "product_name": "HIJAB",
    "product_price": "SAR 999",
    "transaction_id": "#131351",
    "transaction_time": "1:00 PM",
    "transaction_date": "21/10/22",
  },
  {
    "id":4,
    "product_name": "HIJAB",
    "product_price": "SAR 999",
    "transaction_id": "#131351",
    "transaction_time": "1:00 PM",
    "transaction_date": "21/10/22",
  },
  {
    "id":5,
    "product_name": "HIJAB",
    "product_price": "SAR 999",
    "transaction_id": "#131351",
    "transaction_time": "1:00 PM",
    "transaction_date": "21/10/22",
  },
  {
    "id":6,
    "product_name": "HIJAB",
    "product_price": "SAR 999",
    "transaction_id": "#131351",
    "transaction_time": "1:00 PM",
    "transaction_date": "21/10/22",
  },
]
const Mywallet = () => {
  const handleSendMoney = () => {
    console.log("Send money to bank account")
  };

  return (
    <View style={styles.container} >
      <View style={styles.total_ammount} >
        <Text style={styles.ammount_text} >SAR-35.000</Text>
        <TouchableOpacity 
          onPress={()=> handleSendMoney()}
          style={styles.money}
        >
          <Text style={styles.send_money} >SEND MONEY TO BANK </Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{
          height:417
        }}
      >
        <View style={styles.trans_body} >
          <Text style={styles.trans_details}>Transaction Details</Text>
          {transactionDetails.map((trans, ind) => {
            return (
              <View key={ind} style={styles.single_trans} >
                <View style={styles.trans_product} >
                  <Text style={styles.product_name} >PURCHASE OF {trans.product_name}</Text>
                  <Text style={styles.product_price} >{trans.product_price}</Text>
                </View>
                <Text style={styles.trans_id} >Transaction ID:{trans.transaction_id}</Text>
                <Text style={styles.trans_time}>{`${trans.transaction_time}, ${trans.transaction_date}`}</Text>
            </View>
            )
          })}
        </View>
      </ScrollView>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:16,
    backgroundColor:"#F7F7F7"
  },
  total_ammount:{
    height:174,
    // width:360,
 
    borderWidth:1,
    borderColor:"#DEE4E8",
    backgroundColor:"#FFFFFF",
    alignItems:"center"
  },
  ammount_text:{
    height:33,
    width:164,
    fontSize:27,
    letterSpacing:2.7,
    color:"#57504B",
    marginTop:29,
    fontFamily:"DancingScript-VariableFont_wght"
  },
  money:{
    height:50,
    width:231,
    backgroundColor:"#F2E7D3",
    marginTop:35,
    alignItems:"center",
    justifyContent:"center"
  },
  send_money:{
    height:13,
    fontSize:12,
    color:"#57504B",
    fontWeight:"bold"
  },
  trans_body:{
    marginTop:17
  },
  trans_details:{
    color:"#57504B",
    height:18,
    fontSize:16,
    fontWeight:"bold",
    alignContent:"flex-start"
  },
  single_trans:{
    marginTop:25,
    height:69
  },
  trans_product:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  product_name:{
    height:13,
    fontSize:12,
    color:"#8D8D8D",
    fontWeight:"bold"
  },
  product_price:{
    height:13,
    fontSize:12,
    color:"#46B957",
    fontWeight:"bold"
  },
  trans_id:{
    height:13,
    marginTop:8,
    fontSize:12,
    color:"#57504B",
    fontWeight:"bold"
  },
  trans_time:{
    height:11,
    marginTop:8,
    fontSize:10,
    color:"#8D8D8D",
    fontWeight:"bold"
  }
})

export default Mywallet