import React from 'react'
import { View, Image, StyleSheet, Text, } from "react-native";


const SingleProduct = ({
  product
}) => {
  return (

    <View style={styles.product_details} >
      {
        product.order_product?.map((productDetails, ind) => {
          return (
            <>
              <Image
                source={require("../../../assets/lagoba_assets/bckgn.png")}
                style={styles.product_image}
              />
              <View style={styles.name_price} >
                <Text style={styles.product_name} >Printed Solid Border Blue Hijab</Text>
                <View style={styles.price_quantity} >
                  <Text style={styles.price} >SAR 500</Text>
                  <Text style={styles.quantity} >QTY. 1</Text>
                </View>
                <Text style={styles.status}>Received</Text>
                <Text style={styles.delivery}>Delivered</Text>
              </View>
            </>
          )
        })
      }

    </View>
  )
}

const styles = StyleSheet.create({
  scroll_view: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,

  },
  header: {
    height: 136,
    marginTop: 9,
    backgroundColor: "#FAFAF8"
  },
  logo: {
    height: 30.05,
    width: 111.85,
  },
  headline: {
    marginTop: 9,
    height: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dashboard_name: {
    flex: 0.65,
    fontSize: 14,
    fontWeight: "bold"
  },
  filter: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  filter_text: {
    fontSize: 10,
    fontWeight: "bold"
  },
  top_bar: {
    marginTop: 11,
    height: 84,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  category: {
    height: 84,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DEE4E8",
  },
  no_orders: {
    height: 36,
    color: "#57504B",
    fontWeight: "bold",
    fontSize: 27,
    fontFamily: "New York Regular",
    letterSpacing: 2.7
  },
  order_category: {
    height: 11,
    fontSize: 10,
    letterSpacing: 1,
    color: "#A0A2A8"
  },
  all_orders: {
    height: 16,
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orders_text: {
    fontSize: 14,
    color: "#57504B",
    fontWeight: "bold"
  },
  view_all: {
    fontSize: 10,
    color: "#57504B",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  single_order: {
    marginTop: 18,
    height: 110
  },
  order_id_text: {
    height: 13,
    fontSize: 12,
    color: "#000",
    fontWeight: "bold"
  },
  product_details: {
    height: 88,
    marginTop: 9,
    // flexDirection: ""
  },
  product_image: {
    height: 88,
    flex: 0.2,
  },
  name_price: {
    flex: 0.8,
    marginLeft: 15
  },
  product_name: {
    height: 13,
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B",
    // lineHeight:13
  },
  price_quantity: {
    marginTop: 10,
    flexDirection: "row",
    width: "30%",
    height: 14,
    justifyContent: "space-between",
  },
  price: {
    // fontFamily:"s"
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
  delivery: {
    color: "green",
    fontWeight: "bold",
    fontSize: 10,
  }
})

export default SingleProduct