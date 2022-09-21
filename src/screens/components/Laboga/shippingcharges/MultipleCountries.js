import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';

const AvailableCountry = [
  {
    "id": 0,
    "country": "INDIA",
  },
  {
    "id": 1,
    "country": "SAUDI",
  },
  {
    "id": 2,
    "country": "UAE",
  },
  {
    "id": 3,
    "country": "OMAN",
  },
];



const MultipleCountries = () => {

  const [price, setPrice] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const selectCountry = (country) => {
    setSelectedId(country.id)
    console.log(country.id, "country")
  };
  return (
    <View style={styles.container}>
      <Text style={styles.select_text}>
        Select Available Countries :
      </Text>
      <View style={styles.select_countries} >
        {
          AvailableCountry.map((country, ind) => {
            return (
              <TouchableOpacity style={country.id == selectedId ? styles.selected_country : styles.country} >
                <Text 
                  key={ind}
                  style={styles.country_name} 
                  onPress={() => selectCountry(country)} 
                >
                  {country.country}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <View style={styles.country_prices} >
        <Text style={styles.country} >INDIA</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPrice}
          value={price}
          placeholder="Shipping Price"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  select_text: {
    height: 16,
    fontSize: 14,
    marginTop: 5,
    color: "#57504B",
    fontWeight: "bold"
  },
  select_countries: {
    marginTop: 11,
    height: 37,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center"
  },
  selected_country: {
    height: 36,
    width: 70,
    backgroundColor: "#F2E7D3",
    alignItems: "center",
    justifyContent: "center",
  },

  country: {
     height: 36,
    width: 70,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  country_name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#58504A",
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
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
    width: 156
  },
})

export default MultipleCountries