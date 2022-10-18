import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { getNewOrderDetails, ordersHomePageDetails } from '../../../../redux/actions/signup.action'
import SingleProduct from '../SingleProduct'

const NewOrders = ({ navigation }) => {

  const [newOrders, setNewOrders] = useState(null)
  const [isLoading, setIsLodaing] = useState(true);

  // navigate to the product details :
  const gotoOrderDetails = () => {
    navigation.navigate("orderdetails")
  }

  // getting the infirmation of orders on bases of month, week and day,
  const homePageDetails = () => {
    ordersHomePageDetails()
      .then((res) => {
        setAllorderDetails(res.data)
      })
      .catch((error) => {
        console.log(error, "error in all orders details")
      })
  };

  // getting the new order details:
  const handleOrderDetails = () => {
    getNewOrderDetails(0, " 103, 104")
      .then((res) => {
        console.log(res.data, "new order details")
        setNewOrders(res.data.response)
        setIsLodaing(false)
      })
      .catch(error => {
        console.log(error, "error in orderlist")
      })
  }


  // side effects:
  useFocusEffect(
    useCallback(() => {
      homePageDetails()
      handleOrderDetails()
    }, [])
  );

  // JSX---------------------------------------------
  return (
    <View style={styles.container} >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll_view}
      >
        {
          isLoading ? <ActivityIndicator size="large" color="#D0A765" /> :
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scroll_view} >
              {
                newOrders && newOrders?.orders?.map((data, i) => {
                  return (
                    <View key={i} style={styles.single_order} >
                      <SingleProduct product={data} />
                    </View>

                  )
                }
                )
              }
            </ScrollView>
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 16
  },
  scroll_view: {
    flex: 1,
    height: "100%"
  },
  single_order: {
    // marginTop: 18,
    // height: 110
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
    flexDirection: "row"
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

export default NewOrders