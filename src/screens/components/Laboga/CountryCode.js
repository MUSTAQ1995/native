import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'

const CountryCode = ({setCallingCode}) => {

  const [countryCode, setCountryCode] = useState("SA");
  const [country, setCountry] = useState(null);
  // const [withCallingCode, setWithCallingCode] = useState(+966);
  const [withFilter, setWithFilter] = useState(true);
  const [countryCallingCode, setCountryCallingCode] = useState(null);
  const [withCallingCodeButton, setWithCallingCodeButton] = useState(true)

  const onSelect = (country) => {
    setCountryCallingCode(Number(country.callingCode))
    setCountryCode(country.cca2)
    setCountry(country)
    setCallingCode(country.callingCode.toString())
  }

  return (
    <View>
      <CountryPicker
        {...{
          countryCode,
          // withFlag,
          // withCallingCode,
          withFilter,
          onSelect,
          withCallingCodeButton
        }}
        // visible
      />
    </View>
  )
}

export default CountryCode