import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper';
import CustomDivider from '../Reusable/CustomDivider';
import WithColors from './WithColors';
import WithoutColors from './WithoutColors';


const AddProductDetails = ({ navigation }) => {
  const [value, setValue] = useState("Yes");
  const [ colors, setColors ] = useState(true)

  const handleChange = (value) => {
    setValue(value);

    {value === "Yes" ?  setColors(true) :  setColors(false) }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollview}
    >
      <View style={styles.container} >
        <View style={styles.steps} >
          <View style={styles.stepOne} >
            <Text style={styles.one} > 1</Text>
            <Text style={styles.details} >Details</Text>
          </View>
          <View style={styles.line} ></View>
          <View style={styles.stepTwo} >
            <Text style={styles.two} > 2</Text>
            <Text style={styles.details} >Upload Pic</Text>
          </View>
        </View>
        <View style={styles.product_available} >
          <Text style={styles.multi_country}>Is This Product Available In Different Colours??</Text>
          <RadioButton.Group onValueChange={newValue => handleChange(newValue)} value={value} >
            <View style={{ flexDirection: "row", marginTop: 15 }}  >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="Yes" />
                <Text style={{ color: "#57504B", fontWeight: "bold", fontSize: 16 }} >Yes</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="No" />
                <Text style={{ color: "#57504B", fontWeight: "bold", fontSize: 16 }} >No</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <CustomDivider/>
        <View style={styles.colors} >
          { colors ? <WithColors /> : <WithoutColors/>}
        </View>
        {/* <TouchableOpacity style={styles.submit_add} >
          <Text>SUBMIT AND ADD PRODUCT</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>

  )
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    marginHorizontal:16,
  },
  steps: {
    marginTop: 27,
    height: 45,
    width: 309,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative"
  },
  stepOne: {
    alignItems: "center"
  },
  one: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#58504A",
    color: "#fff",
    paddingLeft: 3,
  },
  details:{
    fontWeight:"700"
  },
  line: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 1,
    width: 229,
    marginTop: 10,
    marginHorizontal: 34,
    position: "absolute"
  },
  stepTwo: {
    alignItems: "center"
  },
  two: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#58504A",
    color: "#fff",
    paddingLeft: 3,
  },
  multi_country: {
    marginTop: 28,
    width:360,
    fontSize: 14,
    fontWeight: "700",
    color: "#57504B",
  },
  colors:{
    // borderWidth:1,
    // borderColor:"#000",
  },
  submit_add:{
    backgroundColor:"#F2E7D3",
    height:56,
    width:"100%",
    position:"absolute",
    bottom:27,
  }
})

export default AddProductDetails