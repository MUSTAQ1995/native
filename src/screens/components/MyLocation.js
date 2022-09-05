// import React, {useState} from 'react';
// import RNLocation from "react-native-location";
// import { View, Text, Button, StyleSheet } from 'react-native';


// RNLocation.configure({
//   distanceFilter: 5.0,
//   desiredAccuracy: {
//     ios: "best",
//     android: "balancedPowerAccuracy"
//   },
//   // Android only
//   androidProvider: "auto",
//   interval: 5000, // Milliseconds
//   fastestInterval: 10000, // Milliseconds
//   maxWaitTime: 5000, // Milliseconds
//   // iOS Only
//   // activityType: "other",
//   // allowsBackgroundLocationUpdates: false,
//   // headingFilter: 1, // Degrees
//   // headingOrientation: "portrait",
//   // pausesLocationUpdatesAutomatically: false,
//   // showsBackgroundLocationIndicator: false,
// });

// const MyLocation = () => {

//   [viewLocation, isViewLocation] = useState([])

//   const permissionHandle = async () => {
//     console.log('hereeeeeeeeeeeeeeeeee')
//     let permission = await RNLocation.checkPermission({
//       ios:"whenInUse",
//       android:{
//         detail:"coarse",
//       }
//     });
//     console.log(permission)
//     let location;
//     if(!permission){
//       permission = await RNLocation.requestPermission({
//         ios:"whenInUse",
//         android:{
//           detail:"coarse",
//           rationale: {
//             title: 'We need to access your location',
//             message: "We use your location to show where you are on the map",
//             buttonPositive: "OK",
//             buttonNegative: "Cancel"
//           }
//         }
//       })
//       console.log(permission)
//       location = await RNLocation.getCurrentPermission({ timeout:100})
//       console.log(location)
//       isViewLocation(location)
//     } else {
//       location = await RNLocation.getLatestLocation({ timeout: 100 })
//       console.log(location)
//       isViewLocation(location)

//     }
//   };



//   return (
//     <View style={styles.container}>
//       <View style={styles.view} >
//         <Button 
//           title='Get Location'
//           onPress={permissionHandle}
//         />
//       </View>
     
//         <Text>Latitude:{viewLocation.latitude}</Text>
//         <Text>Longitude:{viewLocation.longitude}</Text>
//       <View style={styles.view} >
//       <Button title="Send Location" />
//       </View>
     
//     </View>
   
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: "center",
//     flexBasis: "#fff",
//   },
//   view: {
//     marginTop:10,
//     padding:10,
//     borderRadius:10,
//     width:"40%",
//   },
//   text: {
//     flex:1
    
//   },
// })

// export default MyLocation;