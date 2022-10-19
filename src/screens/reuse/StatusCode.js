import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
const orderStatusCode = [
  {
    "id": "100",
    "title": "Order Placed",
  },
  {
    "id": "102",
    "title": "Confirmed",
  },
  {
    "id": "103",
    "title": "Shipped",
  },
  {
    "id": "104",
    "title": "On the way",
  },
  {
    "id": "106",
    "title": "Delivered",
  },
  {
    "id": "107",
    "title": "Cancelled",
  }
]

const StatusCode = ({ statusID }) => {

  const [orderStatus, setOrderStatus] = useState(null);
  const [statusColor, setStatusColor] = useState("red")

  useFocusEffect(
    useCallback(() => {
      handleCheckStatus(statusID)
    }, [])
  );

  const handleCheckStatus = statusID => {
    switch (statusID) {
      case "100":
        setOrderStatus("OrderPlaced");
        setStatusColor("#D0A765");
        break;
      case "102":
        setOrderStatus("Confirmed");
        setStatusColor("#D0A765");
        break;
      case "103":
        setOrderStatus("Shipped");
        setStatusColor("#D0A765");
        break;
      case "104":
        setOrderStatus("On the way");
        setStatusColor("#D0A765");
        break;
      case "106":
        setOrderStatus("Delivered");
        setStatusColor("green");
        break;
      case "107":
        setOrderStatus("Cancelled");
        setStatusColor("red");
        break;
      default:
        setOrderStatus(null)
        setStatusColor("#46B957")
    }
  }


  return (

    <Text style={{
      color: statusColor,
      // height: 11,
      fontSize: 10,
      marginTop: 12,
      // color: "#CCCCCC",
      fontWeight: "bold"
    }} >{orderStatus}</Text>

  )
}

const styles = StyleSheet.create({

})

export default StatusCode

