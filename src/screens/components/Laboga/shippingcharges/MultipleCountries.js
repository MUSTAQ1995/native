import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { country_list, postShippingCharges } from '../../../../redux/actions/signup.action';
import { useFocusEffect } from '@react-navigation/native';
import { CountryList } from 'react-native-country-picker-modal';
import { useFormik, FieldArray, Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { showSuccess } from '../../../reuse/FlashMessage';

const formValidation = Yup.object({
  country: Yup.array(Yup.object({
    shipping_charge:Yup.string().required("This is required filed")
  }))
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


const MultipleCountries = () => {

  const [price, setPrice] = useState(null);
  const [activeCountries, setActiveCountries] = useState([]);
  const [CountryList, setCountryList] = useState([]);

  const initialValues = {
    country: [...activeCountries]
  }

  const selectCountry = (country) => {
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

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.select_text}>
          Select Available Countries :
        </Text>
        <View style={{  flex:1}}>
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

        <Formik
          enableReinitialize={true}
          validationSchema={formValidation}
          initialValues={initialValues}
          onSubmit={values => {
            postShippingCharges(values)
            .then(res=>{
              showSuccess("charges updated successfully")
            })
            console.log(values, "formik values")}
          }
        >

          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
            <>
              <ScrollView
                style={styles.verticle_scroll}
                showsVerticalScrollIndicator={false}
              >
                <FieldArray
                  name="country"
                  render={arrayHelpers => {
                    const { push, remove, form } = arrayHelpers
                    const { country } = form.values
                    // console.log(form.errors.country[2].shipping_charge, "form errors")
                    return (country.map((cntry, ind) => {
                      return (
                        <View key={ind} style={styles.country_prices} >
                          <Text
                            style={styles.country}
                          >{form.values.country[ind].title}</Text>
                          <View style={styles.shipping_price} >
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
                          {(form?.touched && form?.errors)
                           && (form?.touched?.country && form?.errors?.country) 
                           && (form?.touched?.country[ind]?.shipping_charge && form?.errors?.country[ind]?.shipping_charge) 
                           && <Text style={styles.error} >{form.errors.country[ind].shipping_charge}</Text>}
                          </View>
                          {/* <TextInput
                            name={`country[${ind}.shipping_charge]`}
                            id="shipping_charge"
                            style={styles.input}
                            onChangeText={form.handleChange(`country[${ind}.shipping_charge]`)}
                            onBlur={form.handleBlur(`country[${ind}.shipping_charge]`)}
                            value={form.values.country[ind].shipping_charge}
                            placeholder="Shipping Price"
                            keyboardType="numeric"
                          /> */}
                          {/* { form?.touched?.country[ind]?.shipping_charge  && console.log(form?.errors?.country[ind]?.shipping_charge, "form errors")} */}
                          {/* {(form.touched && form.errors)
                           && (form?.touched?.country && form?.errors?.country) 
                           && (form?.touched?.country[ind]?.shipping_charge && form?.errors?.country[ind]?.shipping_charge) 
                           && <Text style={styles.error} >{form.errors.country[ind].shipping_charge}</Text>} */}
                        </View>
                      )
                    }))
                  }}
                />
              </ScrollView>
              <TouchableOpacity
                style={[activeCountries.length > 0  ? styles.save: styles.deactive]}
                // disabled={activeCountries.length > 0 ? false : true }
                onPress={() => handleSubmit()}
              >
                <Text style={styles.save_text} >SAVE SHIPPING CHARGES </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height:"100%",
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
    height: 38,
    width: 70,
    backgroundColor: "#F2E7D3",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    borderRadius: 10,
  },

  not_selected_country: {
    height: 38,
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
    marginTop: 12,
    height: 65,
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
    color:"black"
  },
  horizontal_scroll: {
    marginTop:11,
    height: 36,
  },
  verticle_scroll: {
    height: 470,
  },
  save: {
    backgroundColor: "#F2E7D3",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom:10,
  },
  deactive: {
    backgroundColor: "gray",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom:10,
  },
  save_text: {
    height: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B",
    letterSpacing: 1.2
  },
  error: {
    color: "red",
    // marginVertical:5,
    fontSize:12,
    fontWeight: "bold"
  }
})

export default MultipleCountries