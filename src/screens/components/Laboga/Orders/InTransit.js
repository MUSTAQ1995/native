import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native'
import { getNewOrderDetails, ordersHomePageDetails } from '../../../../redux/actions/signup.action';
import SingleProduct from '../SingleProduct';

const InTransit = () => {

  const [inTransit, setInTransit] = useState(null);
  const [isLoading, setIsLodaing] = useState(true);

  // getting the intransit order details
  const handleOrderDetails = () => {
    getNewOrderDetails(0, " 103, 104")
      .then((res) => {
        setInTransit(res.data.response)
        setIsLodaing(false)
      })
      .catch(error => {
        console.log(error, "error in orderlist")
      })
  };
  
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
  useFocusEffect(
    useCallback(() => {
      // homePageDetails()
      handleOrderDetails()

    }, [])
  );
  return (
    <View style={styles.container} >
      {
        isLoading ? <ActivityIndicator size="large" color="#D0A765" /> :
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll_view} >
            {
              inTransit && inTransit?.orders?.map((data, i) => {
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

export default InTransit