import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc", {language: "en"});

Geocoder.from("Colossem")
  .then(json => {
    var location = json.results[0].geometry.location;
    console.log(location);
  })
  .catch(error => console.warn(error));4

Geocoder.from(41.89, 12,49)
  .then(json => {
    var addressComponent = json.results[0].address_components[0];
    console.log(addressComponent);
  })
  .catch(error => console.log(error));

Geocoder.from({
  latitude : 41.89,
  longitude: 12.49
});

Geocoder.from({
  lat:41.89,
  lng:12.49
});
              