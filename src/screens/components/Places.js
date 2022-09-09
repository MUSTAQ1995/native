import React, {useRef} from 'react';
import {View, Text, StyleSheet} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


navigator.geolocation = require('react-native-geolocation-service');

const Places = () => {
  const placeRef = useRef();

  const getAddress = () => {
    console.log(placeRef.current?.getAddressText());
  };
  return (
    <View style={styles.container} >
      <GooglePlacesAutocomplete
        placeholder='Search...'
        onPress={(data, details = null) => {
          console.log(data, details)
        }}
        query={{
          key: "AIzaSyA0O-b0ckiLPYAu8BHvpncMnl-YxTjf9oo",
          language: "en",
          // components: "country: india",
          // language: "kn",
        }}
        ref={placeRef}
        fetchDetails={true}
        currentLocation={true}
        // currentLocationLabel="Current Location"
        onFail={error => console.error(error)}
        onNotFound={()=>console.log("no result")}
        textInputProps={{
          autoFocus: true,
          blurOnSubmit: false
        }}
        // predefinedPlaces={[
        //   {
        //     type:"favorite",
        //     description:"Dominos Pizza",
        //     geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
        //   },
        //   {
        //     type: "favorite",
        //     description: "Chicken Republic",
        //     geometry: { location: { lat: 48.8496818, lng: 2.2940881}}
        //   }
        // ]}
        listEmptyComponent={() =>(
          <View style={{ flex: 1 }} >
            <Text>No result were found</Text>
          </View>
        )}
        styles={{
          container: {
            flex: 1,
          },
          description: {
            color: '#000',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#3caf50',
          },
          textInput: {
            borderColor: 'orange',
            fontSize: 20
          }
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
})

export default Places;