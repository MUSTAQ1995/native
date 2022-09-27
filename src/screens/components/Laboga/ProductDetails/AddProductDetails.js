import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { RadioButton } from 'react-native-paper';
const AddProductDetails = ({ navigation }) => {
  const [value, setValue] = useState("No");

  const handleChange = (value) => {
    setValue(value);

    // {value === "Yes" ?  setMultiCountry(true) :  setMultiCountry(false) }
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
          <Text style={styles.multi_country}>Do You Ship In Multiple Countires?</Text>
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
    position: "relative"
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
})

export default AddProductDetails