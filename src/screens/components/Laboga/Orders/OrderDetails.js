import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { getSingleOrderDetails } from '../../../../redux/actions/signup.action';
import Steppe from "../Steppe";
import StatusModal from './StatusModal';
import { useFocusEffect } from '@react-navigation/native';

const OrderDetails = ({ navigation, route }) => {

  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLodaing] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [orderDetail, setOrderDetail] = useState(null);

  const { order_id } = route.params;

  useFocusEffect(
    useCallback(() => {
      order_id &&  getSingleOrderDetails(order_id)
        .then(res => {
          setOrderDetail(res.data.response)
          setIsLodaing(false)
        })
        .catch(errors => {
          console.log('errors in single order details', errors)
        })
    }, [])
  );

  const increase = () => {
    setQuantity(quantity + 1)
  };
  const decrease = () => {
    setQuantity(quantity - 1)
  };

  const openModal = () => {
    setModalVisible(true);
  }

  console.log(orderDetail, "orderDetails")
  // -----------------------------------------------------------------------------
  return (
    <View>
      {
        isLoading ? <ActivityIndicator color="#D0A765" size="large" /> :
          <>
            <ScrollView
              style={styles.scrollview}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.container} >
                <View style={styles.stepper} >
                  <Steppe orderStatus={orderDetail?.status} />
                </View>
                <View style={styles.custom_divider} >
                </View>
                <View style={styles.custom_address} >
                  <View style={styles.custom_name} >
                    <Text style={styles.name} >{orderDetail?.user_name} </Text>
                    <TouchableOpacity style={styles.address_type} >
                      <Text style={styles.address_type_text} >{orderDetail?.address_type}</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.mobile_number}>{`${orderDetail?.country_code} ${orderDetail?.mobile_number}`}</Text>
                  <View style={styles.location}  >
                    <Text style={styles.street_name} >
                      {orderDetail?.address}
                    </Text>
                  </View>
                </View>
                <View style={[styles.custom_divider, { marginTop: 10 }]} ></View>
                {
                  orderDetail?.order_product?.map((data, ind) => {
                    return (
                      <TouchableOpacity key={ind} onPress={() => navigation.navigate("myproduct")} >
                        <View style={styles.product_details} >
                          <Image
                            style={styles.product_image}
                            source={{
                              uri: data?.product_image
                            }}
                          />

                          <View style={styles.name_price} >
                            <Text style={styles.product_name} >{data?.product_title}</Text>
                            <View style={styles.color_quantity} >
                              <View style={styles.size_color} >
                                <Text style={styles.size} >VIEW SIZE</Text>
                                <Text style={styles.price} >{data?.total}</Text>
                              </View>
                              <View style={styles.qty} >
                                <TouchableOpacity
                                  onPress={() => decrease()} >
                                  <Image
                                    source={require("../../../../assets/lagoba_assets/substract.png")}
                                  />
                                </TouchableOpacity>
                                <Text style={{
                                  color: "#57504B",
                                  fontSize: 12,
                                  letterSpacing: 0.96,
                                  fontWeight: "bold"
                                }} >{data?.quantity}</Text>
                                <TouchableOpacity onPress={() => increase()} >
                                  <Image
                                    source={require("../../../../assets/lagoba_assets/add.png")}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )
                  })
                }
                <View style={styles.summary} >
                  <Text style={styles.summary_text} >SUMMARY</Text>
                  <View style={styles.costs} >
                    <View style={styles.cost_types}>
                      <Text style={styles.cost_text} >SUBTOTAL ({ orderDetail?.order_product?.length} ITEMS)</Text>
                      {orderDetail?.discount == 0 ? null:  <Text style={styles.cost_text} >COUPON DISCOUNT</Text>}
                     
                      <Text style={styles.cost_text} >VAT(18%)</Text>
                      <Text style={styles.cost_text} >DELIVERY</Text>
                      <Text style={[styles.cost_text, { fontWeight: "bold" }]} >TOTAL AMOUNT</Text>
                    </View>
                    <View style={styles.diff_prises}>
                      <Text style={styles.cost_text} >{` ${orderDetail?.currency} ${orderDetail?.sub_total}`}</Text>
                      {orderDetail?.discount == 0 ? null: <Text style={[styles.cost_text, { color: "red", }]}>{` ${orderDetail?.currency} ${orderDetail?.discount}`}</Text>}
                      
                      <Text style={styles.cost_text} >{` ${orderDetail?.currency} ${orderDetail?.tax}`}</Text>
                      <Text style={[styles.cost_text, { color: "green" }]} >{` ${orderDetail?.currency} ${orderDetail?.shipping_charges}`}</Text>
                      <Text style={[styles.cost_text, { fontWeight: "bold" }]}>{` ${orderDetail?.currency} ${orderDetail?.total}`}</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.update_status} onPress={() => openModal()} >
                    <Text style={styles.update_status_text} >UPDATE STATUS</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>
            <View style={styles.centeredView}>
              <Modal
                animationType='slide'
                visible={modalVisible}
                style={{ height: 288 }}
                onRequestClose={() => {
                  setModalVisible(false)
                }}
              >
                <StatusModal 
                  vendorID={orderDetail.order_vendor_id}
                  orderStatus={orderDetail?.status} 
                  setModalVisible={setModalVisible}  
                  statusList={orderDetail?.status_list}
                />
              </Modal>
            </View>
          </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor:"#fff"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 288,
    marginTop: 300,
  },
  custom_divider: {
    marginTop: 8,
    height: 4,
    backgroundColor: "lightgray",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  custom_address: {
    height: 100,
    marginTop: 30,
    paddingLeft: 12
  },
  custom_name: {
    height: 16,
    flexDirection: "row",
  },
  name: {
    flex: 0.4,
    color: "#57504B",
    fontSize: 12,
    fontWeight: "bold"
  },
  address_type: {
    backgroundColor: "#E2D7C2",
    flex: 0.1,
    alignItems: "center"
  },
  address_type_text: {
    height: 11,
    fontSize: 10,
    color: "#57504B",
    fontWeight: "bold"
  },
  mobile_number: {
    height: 13,
    marginTop: 10,
    fontSize: 12,
    color: "#57504B",
    fontWeight: "bold",
    letterSpacing: 1.2
  },
  location: {
    marginTop: 8,
    width: "70%",
    height: 41,
  },
  street_name: {
    color: "#57504B",
    fontWeight: "bold",
    lineHeight: 20
  },
  product_details: {
    height: 88,
    marginTop: 9,
    flexDirection: "row",
   
  },
  product_image: {
    height: 88,
    flex: 0.2,
  },
  name_price: {
    flex: 0.8,
    marginLeft: 26.5
  },
  product_name: {
    height: 13,
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B",
    // lineHeight:13
  },

  color_quantity: {
    marginTop: 10,
    height: 65,
    flexDirection: "row"
  },
  size_color: {
    flex: 0.6
  },
  size: {
    height: 11,
    fontSize: 10,
    fontWeight: "bold",
    color: "#57504B",
    letterSpacing: 1,
    textDecorationLine: "underline"
  },
  price: {
    height: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  qty: {
    height: 24,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#DEE4E8",
    flex: 0.23,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20
  },
  summary: {
    marginTop: 23,
    backgroundColor:"#FAFAF8"
  },
  summary_text: {
    height: 16,
    fontSize: 14,
    marginTop: 17,
    color: "#57504B",
    letterSpacing: 0.56,
    fontWeight: "bold",
    paddingLeft: 25
  },
  costs: {
    marginTop: 31,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25
  },
  cost_types: {

  },
  cost_text: {
    height: 13,
    fontSize: 12,
    color: "#57504B",
    marginBottom: 18,
    letterSpacing: 1.2,
    fontWeight: "700"
  },
  diff_prises: {
    // textAlign:"right"
  },
  update_status: {
    marginTop: 18,
    backgroundColor: "#F2E7D3",
    alignItems: "center",
    marginBottom: 34,
    height: 54,
    justifyContent: "center"
  },
  update_status_text: {
    height: 13,
    fontSize: 12,
    letterSpacing: 0.96,
    color: "#57504B",
    fontWeight: "bold"
  }
});
export default OrderDetails