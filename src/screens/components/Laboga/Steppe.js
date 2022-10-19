import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Steppe = ({ orderStatus }) => {
  const [step, setStep] = useState(1)

  const handleProcessing = () => {
    setStep(1)
  };
  const handleShipped = () => {
    setStep(2)
  };

  const handleOut = () => {
    setStep(3)
  };
  const handleDelivered = () => {
    setStep(4)
  };
console.log(orderStatus, "in the stepper component")

  useFocusEffect(
    useCallback(() => {
      switch(Number(orderStatus)) {
        case 106:
         setStep(4)
          break;
        case 103:
          setStep(2)
          break;
        case 104:
          setStep(3)
          break;
        case 102 || 100 :
          setStep(1)
          break;
        default:
          setStep(1)
          break;
      }
    }, [])
  )

  return (
    <View style={styles.conatiner} >
      <View style={styles.steps} >
        {
          step === 1 || step === 2 || step === 3 || step === 4 ?
            <Image
              style={styles.dot_circle}
              source={require("../../../assets/lagoba_assets/dot.png")}
            />
            : <View style={styles.circle2} ></View>
        }
        <View style={[step > 1 ? styles.activeLine : styles.line1]} ></View>
        {
          step === 2 || step === 3 || step === 4 ?
            <Image
              style={styles.dot_circle}
              source={require("../../../assets/lagoba_assets/dot.png")}
            />
            : <View style={styles.circle2} >
              <View style={styles.inside_circle} ></View>
            </View>
        }
        <View style={[step > 2 ? styles.activeLine : styles.line1]} ></View>

        {
          step === 3 || step === 4 ?
            <Image
              style={styles.dot_circle}
              source={require("../../../assets/lagoba_assets/dot.png")}
            />
            : <View style={styles.circle2} >
              <View style={styles.inside_circle} ></View>
            </View>
        }
        <View style={[step > 3 ? styles.activeLine : styles.line1]} ></View>

        {
          step === 4 ?
            <Image
              style={styles.dot_circle}
              source={require("../../../assets/lagoba_assets/dot.png")}
            />
            : <View style={styles.circle2} >
              <View style={styles.inside_circle} ></View>
            </View>
        }
        

      </View>
      <View style={styles.step_status} >
        <Text
          onPress={() => handleProcessing()}
          style={[step == 1 ? styles.active_text : styles.status_text]}
        >Processing</Text>
        <Text
          onPress={() => handleShipped()}
          style={[step == 2 ? styles.active_text : styles.status_text]}
        >Shipped</Text>
        <Text
          onPress={() => handleOut()}
          style={[step == 3 ? styles.active_text : styles.status_text]}
        >Out for Delivery</Text>
        <Text
          onPress={() => handleDelivered()}
          style={[step == 4 ? styles.active_text : styles.status_text]}
        >Delivered</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginTop:10,
  },
  steps: {
    flexDirection: "row",
    justifyContent:"center"
  },
  step_status: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:5,
  },

  line1: {
    width: 90,
    height: 1,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
  },
  activeLine: {
    width: 90,
    height: 1,
    borderColor: "green",
    borderWidth: 1,
    marginTop: 10,
  },
  circle2: {
    width: 22,
    height: 22,
    justifyContent: "center",
  },
  inside_circle: {
    width: 10,
    height: 10,
    backgroundColor: "#C1C2C5",
    borderRadius: 5,
    marginLeft: 7,
  },
  dot_circle: {
    height: 22,
    width: 22,
  },
  status_text: {
    textAlign: "center",
    fontSize: 10,
    color:"#57504B"
  },
  active_text: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    color:"#57504B"
  }
})
export default Steppe