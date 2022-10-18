import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getOrderDetails, ordersHomePageDetails } from '../../../redux/actions/signup.action';
import Popup from './Popup';
import { useFocusEffect } from '@react-navigation/native';
import SingleProduct from "./SingleProduct";

const topBarDetails = [
  {
    "id": 0,
    "no_orders": 56,
    "order_type": "New ORDER",
  },
  {
    "id": 1,
    "no_orders": 24,
    "order_type": "IN TRANSIT",
  },
  {
    "id": 2,
    "no_orders": 78,
    "order_type": "DELIVERED",
  },
];

const ImageCount = 8;
const Dashboard = ({ navigation }) => {

  const [allOrderDetails, setAllorderDetails] = useState(null);
  const [orders, setOrders] = useState(null);
  const [singleProduct, setSingleProduct] = useState([]);
  const [type, setType] = useState(1)

  const homePageDetails = () => {
    ordersHomePageDetails()
      .then((res) => {
        setAllorderDetails(res.data)
      })
      .catch((error) => {
        console.log(error, "error in all orders details")
      })
  };

  const handleOrderDetails = () => {
    getOrderDetails(0, " 100, 102")
      .then((res) => {
        console.log(res.data, "orderlist")
        setOrders(res.data.response)

      })
      .catch(error => {
        console.log(error, "error in orderlist")
      })
  }

  useFocusEffect(
    useCallback(() => {
      homePageDetails()
      handleOrderDetails()

    }, [])
  );
  const gotoAllorders = () => {
    navigation.navigate("allorders")
  }
  // orders && console.log(orders, "orderlist")
  // allOrderDetails && console.log([Object.values(allOrderDetails)[2]], "allOrderDetails")

  return (
    <View style={styles.container} >
      <Image
        source={require("../../../assets/lagoba_assets/logo_white.png")}
        style={styles.logo}
      />
      <View style={styles.header} >
        <View style={styles.headline} >
          <Text style={styles.dashboard_name} >Dashboard</Text>
          <TouchableOpacity style={styles.filter} >
            <Image
              source={require("../../../assets/lagoba_assets/calender_icon.png")}
              style={{ height: 11, width: 11 }}
            />
            <Popup />
            <Icon name="chevron-down-outline" size={12} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.top_bar} >
          {
            topBarDetails && topBarDetails.map((orders, index) => {
              return (
                <TouchableOpacity key={index} style={styles.category} >
                  <Text style={styles.no_orders} >{orders.no_orders}</Text>
                  <Text style={styles.order_category} >{orders.order_type}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <View style={styles.all_orders} >
        <Text style={styles.orders_text} >Orders</Text>
        <TouchableOpacity onPress={() => gotoAllorders()}>
          <Text style={styles.view_all} >View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll_view} >
        {
          orders && orders?.orders?.map((data, i) => {
            console.log(data, "data")
            return (
              <View key={i} style={styles.single_order} >
                <Text style={styles.order_id_text}>ORDER ID :{data.order_id}</Text>
                <TouchableOpacity onPress={() => gotoAllorders()} >
                  <SingleProduct product={data}/>
                </TouchableOpacity>
              </View>

            )
          }
          )
        }
        {/* {
          Array(8).fill().map((data, i) => {
            return (<View key={i} style={styles.single_order} >
              <TouchableOpacity onPress={()=>gotoAllorders()} >
              <Text style={styles.order_id_text}>ORDER ID : #3B3B3B</Text>
              <View style={styles.product_details} >
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
              </View>
              </TouchableOpacity>
            </View>
           
            )
          }
          )
        } */}
      </ScrollView>
    </View>

  )
};

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

export default Dashboard;