import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
  {
    "id": 4,
    "country": "QATAR",
  },
  {
    "id": 5,
    "country": "KUWAIT",
  },
];



const MultipleCountries = () => {

  const [price, setPrice] = useState(null);
  const [activeCountries, setActiveCountries] = useState([]);

  const selectCountry = (country) => {
    const newCountry = [...activeCountries];
    const ind = newCountry.findIndex((element) => { return (element.id == country.id) })
    if (ind == -1) {
      newCountry.push(country);
      setActiveCountries(newCountry)
      return
    }
    newCountry.splice(ind, 1)
    setActiveCountries(newCountry)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.select_text}>
        Select Available Countries :
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontal_scroll}
      >
        <View style={styles.select_countries} >
          {
            AvailableCountry.map((country, ind) => {
              return (
                <TouchableOpacity
                  onPress={() => selectCountry(country)}
                  key={ind}
                  style={[activeCountries?.map(elm => elm.id == country.id && styles.selected_country), styles.not_selected_country]}
                >
                  <Text
                    key={country.id}
                    style={styles.country_name}
                  >
                    {country.country}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
      <ScrollView
        style={styles.verticle_scroll}
        showsVerticalScrollIndicator={false}
      >
        {
          activeCountries && activeCountries.map((data, i) => {
            return (
              <View key={i} style={styles.country_prices} >
                <Text style={styles.country} >{data.country}</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setPrice}
                  value={price}
                  placeholder="Shipping Price"
                />
              </View>
            )
          })
        }
      </ScrollView>

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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  selected_country: {
    height: 36,
    width: 70,
    backgroundColor: "#F2E7D3",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },

  not_selected_country: {
    height: 36,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#DEE4E8",
    borderWidth: 1,
    marginHorizontal: 5,
  },
  country_name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#58504A",
  },
  country_prices: {
    marginTop: 22,
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
  horizontal_scroll: {
    marginTop: 11,
    height: 50,
    width: 360,
  },
  verticle_scroll: {
    height: 370,
  }
})

export default MultipleCountries