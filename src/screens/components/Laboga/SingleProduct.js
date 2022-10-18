import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import StatusCode from '../../reuse/StatusCode';


const SingleProduct = ({
  product
}) => {
  return (
    <>
      <Text style={styles.order_id_text}>ORDER ID : {product.order_id}</Text>
      {
        product?.order_product.map((single_product, ind) => {
          console.log(single_product, "product image url")
          return (
            <>
              <TouchableOpacity key={ind} onPress={() => gotoAllorders()} >
                <View style={styles.product_details} >
                  <Image
                    style={styles.product_image}
                    source={{
                      uri: single_product?.product_image
                    }}
                  />
                  <View style={styles.name_price} >
                    <Text style={styles.product_name} >{single_product.product_title}</Text>
                    <View style={styles.price_quantity} >
                      <Text style={styles.price} >{single_product.unit_price}</Text>
                      <Text style={styles.quantity} >QTY. {single_product.quantity}</Text>
                    </View>
                    <View>
                      <StatusCode statusID={product?.status} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          )
        })
      }
    </>
  )
}

const styles = StyleSheet.create({
  order_id_text: {
    height: 13,
    marginTop:13,
    fontSize: 12,
    color: "#000",
    fontWeight: "bold"
  },
  product_details: {
    height: 88,
    marginTop: 9,
    flexDirection: "row"
  },
  product_image: {
    height: 88,
    resizeMode: 'cover',
    flex: 0.2,
  },
  name_price: {
    flex: 0.8,
    marginLeft: 15,
  },
  product_name: {
    height: 13,
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B",
  },
  price_quantity: {
    marginTop: 10,
    flexDirection: "row",
    width: "50%",
    height: 14,
    justifyContent: "space-between",
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B"
  },
  quantity: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B"
  },
  status: {
    height: 11,
    fontSize: 10,
    marginTop: 12,
    color: "#CCCCCC",
    fontWeight: "bold"
  },
})

export default SingleProduct