import React, {useState} from 'react'
import { View , Text, StyleSheet, Image } from 'react-native'

const Steppe = () => {
  const [step, setStep] = useState(1)
  const [stepOne, setStepOne] = useState(1);
  const [stepTwo, setStepTwo] = useState(2);
  const [stepThree, setStepThree] = useState(3);
  const [stepFour, setStepFOur] = useState(4);

  const handleProcessing = () => {
    setStep(1)
  };
  const handleShipped = () =>{
    setStep(2)
  };

  const handleOut = () => {
    setStep(3)
  };
  const handleDelivered = () => {
    setStep(4)
  };

  return (
    <View style={styles.conatiner} >
      <View style={styles.steps} >
       {
        step === 1 ||  step === 2 ||  step === 3 ||  step === 4 ? 
        <Image 
        style={styles.dot_circle}
        source={require("../../../assets/lagoba_assets/dot.png")}
      />
        : <View style={styles.circle2} ></View>
      }
      <View style={[ step > 1 ? styles.activeLine : styles.line1]} ></View>
      {
        step === 2 ||  step === 3 ||  step === 4 ? 
        <Image 
        style={styles.dot_circle}
        source={require("../../../assets/lagoba_assets/dot.png")}
      />
        : <View style={styles.circle2} >
            <View style={styles.inside_circle} ></View>
          </View>
      }
      <View style={[ step > 2 ? styles.activeLine : styles.line1]} ></View>

       {
        step === 3 ||  step === 4 ? 
        <Image 
        style={styles.dot_circle}
        source={require("../../../assets/lagoba_assets/dot.png")}
      />
        : <View style={styles.circle2} >
            <View style={styles.inside_circle} ></View>
          </View>
      }
      <View style={[ step > 3 ? styles.activeLine : styles.line1]} ></View>
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
        <Text onPress={()=>handleProcessing()} >Processing</Text>
        <Text onPress={()=>handleShipped()} >Shipped</Text>
        <Text onPress={() => handleOut()} >Out for Delivery</Text>
        <Text onPress={() => handleDelivered()} >Delivered</Text>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
  flex:1, 
  },
  steps:{
    flexDirection: "row",
  },
  step_status:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  circle1: {
    borderColor:"#000",
    borderWidth:5,
    width:20,
    height:20,
  },
  line1:{
    width:100,
    height:1,
    borderColor:"gray",
    borderWidth:1,
    marginTop:10,
  },
  activeLine: {
    width:100,
    height:1,
    borderColor:"green",
    borderWidth:1,
    marginTop:10,
  },
  circle2: {
    width:22,
    height:22,
    justifyContent:"center",
  },
  inside_circle:{
    width:10,
    height:10,
    backgroundColor:"#C1C2C5",
    borderRadius:5,
    marginLeft:7,
  },
  line2:{
    width:100,
    height:1,
    borderColor:"gray",
    borderWidth:1,
    marginTop:8,
  },
  circle3: {
    width:6,
    height:6,
    backgroundColor:"#C1C2C5",
    borderRadius:3,
    marginTop:6,
  },
  line3:{
    width:100,
    height:1,
    borderColor:"gray",
    borderWidth:1,
    marginTop:8,
  },
  circle4: {
    width:6,
    height:6,
    backgroundColor:"#C1C2C5",
    borderRadius:3,
    marginTop:6,
  },
  dot_circle: {
    height:22,
    width:22,
  }
})
export default Steppe