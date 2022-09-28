import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import MultipleCountries from './MultipleCountries';

const ShippingCharge = () => {

  const [checked, setChecked] = useState("first");
  const [value, setValue] = useState("No");
  const [price, setPrice] = useState(null);
  const [multyCountry, setMultiCountry] = useState(false);


  const handleChange = (value) => {
    setValue(value);

    {value === "Yes" ?  setMultiCountry(true) :  setMultiCountry(false) }
  };


  return (
    <View style={styles.conatiner} >
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
      <View style={styles.divider}  ></View>
      {
        multyCountry ? <MultipleCountries /> :
          <>
            <View style={styles.country_prices} >
              <Text style={styles.country} >INDIA</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPrice}
                value={price}
                placeholder="Shipping Price"
              />
            </View>
          </>
      }

      <TouchableOpacity style={styles.save} >
        <Text style={styles.save_text} >SAVE SHIPPING CHARGES </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    // marginHorizontal: 16,
    paddingHorizontal:16,
    backgroundColor: "#fff"
  },
  multi_country: {
    marginTop: 21,
    height: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: "#57504B"
  },
  divider: {
    marginTop: 20,
    height: 4,
    backgroundColor: "#EFEFEF",
    width: 400,
    marginLeft: -20
  },
  country_prices: {
    marginTop: 24,
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  country: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#57504B"
  },
  input: {
    borderColor: "#DEE4E8",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    fontSize: 14,
    borderRadius:10,
    fontWeight: "bold",
    width: 156
  },
  save: {
    backgroundColor: "#F2E7D3",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 370
    position:"absolute",
    bottom:30,
    left:16,
    right:16,
    width:"100%"
  },
  save_text: {
    height: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B",
    letterSpacing: 1.2
  }
})

export default ShippingCharge