import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { orderStatusUpdate } from '../../../../redux/actions/signup.action';

const orderStatusCode = [
  {
    "id": 0,
    "status_code": "100",
    "title": "ORDER PLACED",
  },
  {
    "id": 1,
    "status_code": "102",
    "title": "CONFIRMED",
  },
  {
    "id": 2,
    "status_code": "103",
    "title": "SHIPPED",
  },
  {
    "id": 3,
    "status_code": "104",
    "title": "OUT FOR DELIVERY",
  },
  {
    "id": 4,
    "status_code": "106",
    "title": "DELIVERED",
  },

]

const StatusModal = ({
  orderStatus,
  vendorID,
  setModalVisible,
  statusList
}) => {
  const [status, setStatus] = useState(null);
  const [activeStatus, setActiveStatus] = useState(null);
  const [NewOrderList, setNewOrderList] = useState([]);
  const handleUpdateStatus = (order) => {
    setStatus(order.status_code)
    orderStatusUpdate({
      "order_vendor_id": vendorID,
      "status": order.id
    }).then((res => {
      console.log(res, "status updated response")
      setModalVisible(false)
    }))
      .catch(error => {
        console.log(error, "Error whiel updateing the order Status")
      })
  };
  useFocusEffect(
    useCallback(() => {
      const ind = statusList.findIndex((elm) => elm.id == orderStatus)
      const x= [...statusList]
      setNewOrderList(x.splice(ind + 1))
    }, [orderStatus])
  );
  
  return (
    <View style={styles.container} >
      <Text style={styles.processing}>PROCESSING</Text>
      {NewOrderList?.map((order, index) => {
        return (
          <TouchableOpacity
            key={index}
            disabled={index == 0 ? false : true}
            onPress={() => handleUpdateStatus(order)}
            style={styles.multy_status}
          >
            <Text style={styles.type_text} >{order.title}</Text>
            <Text style={index == 0 ? styles.active_status : styles.deactive_status}>Select</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 288,
  },
  processing: {
    height: 13,
    fontSize: 12,
    letterSpacing: 1.2,
    fontWeight: "bold",
    marginTop: 30,
    marginHorizontal: 30
  },
  multy_status: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 30,
    justifyContent: "space-between"
  },
  type_text: {
    height: 13,
    fontSize: 12,
    letterSpacing: 1.2,
    color: "#57504B",
    fontWeight: "bold"
  },
  active_status: {
    color: "green",
    fontSize: 10,
    textDecorationLine: "underline"
  },
  deactive_status: {
    color: "lightgray",
    fontSize: 10,
    textDecorationLine: "underline"
  }
})

export default StatusModal