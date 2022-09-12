import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'

const CountryCode = ({setCallingCode}) => {

  const [countryCode, setCountryCode] = useState("IN");
  const [country, setCountry] = useState(null);
  const [withFlag, setWithFlag] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const [withFilter, setWithFilter] = useState(true);
  const [countryCallingCode, setCountryCallingCode] = useState(null);

  const onSelect = (country) => {
    setCountryCallingCode(Number(country.callingCode))
    setCountryCode(country.cca2)
    setCountry(country)
    setCallingCode(Number(country.callingCode))
  }

  return (
    <View>
      <CountryPicker
        {...{
          countryCode,
          withFlag,
          withCallingCode,
          withFilter,
          onSelect,
        }}
        // visible
      />
    </View>
  )
}

export default CountryCode