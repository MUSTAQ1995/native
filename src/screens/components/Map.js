import React, { useState, useRef, useEffect } from 'react';
import MapView, { Callout, Circle, Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from "react-native-geolocation-service"
import Places from './Places';


const Map = () => {
  const [coords, setCoords] = useState([]);
  const [addres, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [getCoords, setGetCoords] = useState({});
  const initialRegion={
    latitudeDelta: -0.01,
    longitudeDelta: 0.01,
  }
  const [region, setRegion] = useState(initialRegion);

  Geocoder.init("AIzaSyA0O-b0ckiLPYAu8BHvpncMnl-YxTjf9oo");
  
  const fetchAddress = (lat, lng) => {
    Geocoder.from(lat,lng )
        .then((json) => {
          console.log(json.results[0].formatted_address, "address")
          var addressCompoent = json.results[0].formatted_address;
          setAddress(addressCompoent)
        })
        .catch(error => {
          console.log(error)})
  }

  const getLocation = () => {
    try {
      Geolocation.getCurrentPosition((data)=>{
        data && setCoords(data.coords),
        setLat(parseFloat(data.coords.latitude));
        setLng(parseFloat(data.coords.longitude));
        const new_region={...region};
        new_region.latitude=data.coords.latitude ? data.coords.latitude : 11.840447352425695;
        new_region.longitude=data.coords.longitude ? data.coords.longitude : 76.66262324526906;
        setRegion(new_region);
        data && fetchAddress(data.coords.latitude,data.coords.longitude)
      })
    }
    catch(err){
      const new_region={...region};
        new_region.latitude=11.840447352425695;
        new_region.longitude=76.66262324526906;
        setRegion(new_region);
    }
  };
  
  useEffect(() =>{
    getLocation()
  }, []);

  const getCoordinations = () => {
    Geocoder.from(addres)
		.then(json => {
			var location = json.results[0].geometry.location;
      setGetCoords(location)
      getCoords &&  console.log(location)
		})
		.catch(error => console.warn(error));
    getCoords && console.log(getCoords,"co-orddinations of address")
  }

  const mapRef = useRef(null);


  return (
    <View style={styles.mapcontainer} >
      { region.latitude && region.longitude && <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={(region) =>{
        setRegion(region);
        setCoords(region);
        }}
        showsUserLocation={true}
        showsMyLocationButton
        showsPointsOfInterest
        showsCompass
        showsBuildings
        showsTraffic={true}
        showsIndoors
        zoomEnabled
        zoomTapEnabled
        zoomControlEnabled
        rotateEnabled
        scrollEnabled
        scrollDuringRotateOrZoomEnabled
        pitchEnabled
        toolbarEnabled
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          pinColor="gold"     
          draggable={true}

        >
          {/* <Callout>
            <Text>This is  call out</Text>
          </Callout> */}
        </Marker>
      </MapView>}
  
      <View style={styles.wrap} >
        <Text style={[styles.text,{color:"red"} ]} >Adderess: {addres}</Text>
        <Text style={[styles.text]}>Lat: { coords.latitude}</Text>
        <Text style={[styles.text ]} >Lng: { coords.longitude}</Text> 
        <Button 
          title='get address'
          onPress={() => getCoordinations()}
          style={styles.btn}
        />
      </View>
      {/* <View style={styles.places} >
        <Places/>
      </View>  */}
    </View>
  )
};

const styles = StyleSheet.create({
  mapcontainer: {
    position: "relative",
    alignItems: 'center',
    height:620,
  },
  map: {
    position: "absolute",
    width:"100%",
    height:"100%",
  },
  wrap:{
    position:"absolute",
    bottom: 0,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  places: {
    position: "absolute",
    top: 0
  },
  btn:{
    backgroundColor:"red",
    border: "1",
  }
});

export default Map