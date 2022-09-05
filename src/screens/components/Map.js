import React, { useState, useRef, useEffect } from 'react';
import MapView, { Callout, Circle, Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
// import { decode } from '@mapbox/polyline';
import CustomMarker from './CustomMarker';
import Geocoder from 'react-native-geocoding';
// import Geocoder from "react-native-geocoder";
import GeoLocation from "@react-native-community/geolocation"


// const getDirection = async (startLoc, destinaionLoc) => {
//   try{
//     const KEY = "AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc"
//     let resp = await fetch(
//       `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinaionLoc}&key=${KEY}`
//     );
//     let respJson = await resp.json();
//     let points = decode(respJson.routes[0].overview_polyline.points);
//     console.log(points);
//     let coords = points.map((point, index) => {
//       return {
//         latitude: point[0],
//         longitude: point[1]
//       };
//     });
//     return coords;
//   } catch (error){
//     return error;
//   };
// }

const Map = () => {
  const [coords, setCoords] = useState([]);
  const [cirCoords, setCirCoords] = useState([]);
  const [addres, setAddress] = useState("");

  const getLocation = () => {
    GeoLocation.getCurrentPosition((data)=>{
      data && setCoords(data.coords),
      data && setCirCoords(data.coords)
      // getAddress(data.coords.latitude, data.coords.longitude)
  
      data && console.log(coords, "coords of the location")
    })
    
  };
  
  useEffect(() =>{
    getLocation()
  }, [])
  // useEffect(() =>{
  //   getDirection("52.5200066,13.404954", "50.1109221,8.6821267")
  //     .then(coords => setCoords(coords))
  //     .catch(err => console.log("Something went wrong"));
  // }, []);  

  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: -0.01,
    longitudeDelta: 0.01,
  });

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const chibaRegion = {
    latitude:35.6074,
    longitude: 140.1065,
    latitudeDelta: 0.01,
    longitudeDelta:0.01,
  }

  const gotoTokyo = (coords) => {
    mapRef.current.animateToRegion(tokyoRegion, );
  };
const API_KEY = " AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc";

  // const getAddress = async (lat, lng) => {
  //   Geocoder.fallbackToGoogle(API_KEY);
  //   console.log(lat, lng, "lat&&lng")
  //   try{
  //     let resData = await Geocoder.geocodePosition({ lat, lng})
  //       // setAddress(resData[0].formattedAddress)
  //       console.log(resData[0].formattedAddress, "geocoder details")
  //   } catch(err){alert(err)}
  // };

  const getAdderssTwo = () =>{

      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ coords.latitude +','+ coord.longitude +'&key=AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc') // be sure your api key is correct and has access to the geocode api
     .then(response => {
       console.log(response);
        //  this.setState({
        //      place: response.data.results[0].formatted_address // access from response.data.results[0].formatted_address
        //  })
      }).catch((error) => { // catch is called after then
        {alert(error)}
        // this.setState({ error: error.message })
      });
     
  }

  // useEffect(()=>{
  //   // console.log(coords, "coords of the location")
  //   // getAdderssTwo
  //   getAddress(coords.latitude, coords.longitude)
  // }, [])

  useEffect(() => {
    Geocoder.from(coords.latitude, coords.longitude)
      .then(json => {
        console.log(json)
        var addressCompoent = json.result[0].addres_components;
        setAddress(addressCompoent)
        console.log(addressCompoent)
      })
      .catch(error => Alert.alert(error))
  }, [])

  // Geocoder.init("AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc", {language: "en"});

  // // search by addres:
  // Geocoder.from("Colosseum")
  //   .then(json => {
  //     var location = json.results[0].geometry.location;
  //     console.log(location);
  //   })
  //   .catch(error => console.log(error));
  
  //   // search by address, with a biased geo-bounds:
  //   Geocoder.from("Pyramid", {
  //     southwest: { lat: 36.05, lng: -115.25},
  //     northeast: { lat: 36.16, lng: -115.10 }
  //   })
  //     .then(json => {
  //       var location = json.results[0].geometry.location;
  //       console.log(location)
  //     })
  //     .catch(error => console.log(location))
    
  //   Geocoder.from(41.89,12.49)
  //     .then(json => {
  //       var addressComponent = json.result[0].address_components[0];
  //       console.log(addressComponent)
  //     })
  //     .catch(error => console.log(error))

  return (
    <View style={styles.mapcontainer} >
      <MapView
        ref={mapRef}
        style={styles.map}
        // initialRegion={tokyoRegion}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //onRegionChangeComplete runs when the user stops dragging Mapview:
        onRegionChange={(region) =>{
  //  setRegion(region)
  setCoords(region);
  console.log(region, coords, "region")
        }
        
        }
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
        // loadingEnabled
      >
        {/* <Marker 
          coordinate={region} 
          // pinColor="green"
          image={require("../../assets/pngs/marker.webp")}
        /> */}
         {/* <Marker 
          coordinate={region} 
          >
            <CustomMarker/>
          </Marker> */}
        <Marker
          coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude,
          }}
          pinColor="gold"     
          draggable={true}
          // onDragStart={(e)=>{
          //   console.log("drag started", e.nativeEvent.coordinate)
          // }}
          // onDragEnd={(e)=>{
          //   setCirCoords(e.nativeEvent.coordinate)
          // }}
        >
          {/* <Circle
            center={{
              latitude:cirCoords.latitude,
              longitude: cirCoords.longitude
            }}
            radius={100}
            strokeColor="red"
            strokeWidth={3}
          /> */}
          <Callout>
            <Text>This is  call out</Text>
          </Callout>
        </Marker>

        {/* <Polyline 
          coordinates={[tokyoRegion, chibaRegion]}
          strokeColor={"#000"}
          strokeWidth={3}
          lineDashPattern={[1]}
        /> */}
      </MapView>
      {/* <Text style={styles.text} >Current latitude: {region.latitude}</Text>
         <Text style={styles.text} >Current longitude: {region.longitude}</Text> */}
         <Text>Adderess: {addres}</Text>
         <Button 
          onPress={() => gotoTokyo()}
          title="Goto Tokyo"
         />
    </View>
  )
};

const styles = StyleSheet.create({
  mapcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    width: 400,
    height: 600,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue"
  }
})
// AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc: google api key; 
export default Map