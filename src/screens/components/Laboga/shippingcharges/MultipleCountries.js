import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { country_list } from '../../../../redux/actions/signup.action';
import { useFocusEffect } from '@react-navigation/native';
import { CountryList } from 'react-native-country-picker-modal';
import { useFormik, FieldArray, Formik } from "formik";
import * as Yup from "yup";

const formValidation = Yup.object().shape({
  shippingCharge: Yup.array(
    Yup.object({
      countryCharge: Yup.string().required("Shipping Charge is Required")
    })
  )
})

const CountryValidation = Yup.object().shape({
  ARRAY: Yup.array().of(
    Yup.object().shape({
      key: Yup
        .string()
        .trim()
        .max(2000)
        .required("This is required field")
        .label("Price One"),
      key2: Yup.string()
        .required("This is required filed")
        .min(5)
        .max(255)
        .label("Name")
    })
  )
})

const createQuestion = () => {
  text: ""
}

const MultipleCountries = () => {

  const [price, setPrice] = useState(null);
  const [activeCountries, setActiveCountries] = useState([]);
  const [CountryList, setCountryList] = useState([]);

  const initialValues = {
    country: [...activeCountries]
  }

  const selectCountry = (country) => {
    console.log(country, 'backend')
    const newCountry = [...activeCountries];
    const ind = newCountry.findIndex((element) => (element.id == country.id))
    if (ind == -1) {
      newCountry.push(country);
      setActiveCountries(newCountry)
      return
    }
    newCountry.splice(ind, 1)
    setActiveCountries(newCountry)
  };
  console.log(activeCountries)
  useFocusEffect(
    useCallback(() => {
      country_list()
        .then((res) => {
          setCountryList(res.data.response.country)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])
  )


  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: formValidation,
  //   onSubmit: values =>{
  //     console.log(values, "formik value")
  //   }
  // })

  return (
    <View>
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
              CountryList?.map((country, ind) => {
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
                      {country.title}
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
          <Formik
            // style={{position:"relative"}}
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={values => console.log(values, "formik values")}
          >

            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
              <>
                <FieldArray
                  name="country"
                  render={arrayHelpers => {
                    const { push, remove, form } = arrayHelpers
                    const { country } = form.values
                    return (country.map((cntry, ind) => {
                      return (
                        <View key={ind} style={styles.country_prices} >
                          <Text
                            style={styles.country}
                          >{form.values.country[ind].title}</Text>
                          <TextInput
                            name={`country[${ind}.shipping_charge]`}
                            id="shipping_charge"
                            style={styles.input}
                            onChangeText={form.handleChange(`country[${ind}.shipping_charge]`)}
                            onBlur={form.handleBlur(`country[${ind}.shipping_charge]`)}
                            value={form.values.country[ind].shipping_charge}
                            placeholder="Shipping Price"
                            keyboardType="numeric"
                          />
                        </View>
                      )
                    }))
                  }}
                />
                <TouchableOpacity
                  style={styles.save}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.save_text} >SAVE SHIPPING CHARGES </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
    borderRadius: 10,
  },

  not_selected_country: {
    height: 36,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#DEE4E8",
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
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
    width: 156,
    borderRadius: 10,
  },
  horizontal_scroll: {
    marginTop: 11,
    height: 50,
    width: 360,
  },
  verticle_scroll: {
    height: 370,
  },
  save: {
    backgroundColor: "#F2E7D3",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position:"absolute"
    // bottom:20
  },
  save_text: {
    height: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B",
    letterSpacing: 1.2
  }
})

export default MultipleCountries