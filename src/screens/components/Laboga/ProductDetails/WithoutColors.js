import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomDivider from '../Reusable/CustomDivider';

const WithoutColors = () => {

  const [imageDetails, setImageDetails] = useState([]);
  const [price, setPrice] = useState(null);

  const getGalleryImage = () => {
    launchImageLibrary({
      mediaType: "photo" || "video",
      maxHeight: 100,
      maxWidth: 100,
      videoQuality: "high",
      durationLimit: 30,
      quality: 1,
      cameraType: "front",
      includeBase64: true,
      saveToPhotos: true,
      selectionLimit: 0,
    }, (data) => {
      data?.assets && setImageDetails(data.assets);
      // setImageDetails(data.assets)
      console.log(data.assets[0].uri, "image")
    })
  };
  return (
    <View style={styles.container} >
      <View style={styles.upload_photos} >
        <Image
          source={require("../../../../assets/lagoba_assets/upload-icon.png")}
          style={styles.upload_icon}
        />
        <Text style={styles.upload_photo_text} >
          Upload Photo
        </Text>
      </View>
      <Text style={styles.add_photos} >Add Photos</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.photos} >
            {
              imageDetails?.length > 0 && imageDetails?.map((imageData, ind) => {
                return (
                  <View key={ind}>
                    {imageData ? <Image
                      source={{
                        uri: imageData.uri
                      }}
                      style={styles.photo_added}
                    /> : null}

                  </View>
                )
              })
            }
            <TouchableOpacity
              onPress={() => getGalleryImage()}
            >
              <Image
                source={require("../../../../assets/lagoba_assets/add_icon.png")}
                style={styles.add_icon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <CustomDivider />
      <Text style={{ 
        marginTop:13,
        color:"#57504B",fontSize:14,fontWeight:"600"
      }}>Please Enter The Price</Text>
      <View style={styles.add_price} >
          <Text style={styles.add_price_text} >ADD PRICE</Text>
          <TextInput
            placeholder="Enter Price"
            style={styles.input}
            onChangeText={setPrice}
            value={price}
          />
        </View>
        <TouchableOpacity style={styles.submit_add} >
          <Text style={styles.submit_text} >SUBMIT AND ADD PRODUCT</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upload_photos: {
    marginTop: 12,
    height: 116,
    borderWidth: 1,
    borderColor: "#DEE4E8",
    alignItems: "center",
    justifyContent: "center",
    width: 360
  },
  upload_icon: {
    height: 48,
    width: 48
  },
  upload_photo_text: {
    marginTop: 10,
    fontSize: 10,
    color: "#57504B",
    fontWeight: "600",
    textDecorationLine: "underline"
  },
  add_photos: {
    marginTop: 13,
    height: 16,
    fontSize: 14,
    fontWeight: "600",
    color: "#57504B"
  },
  photos: {
    marginTop: 11,
    flexDirection: "row",
    height: 83
  },
  photo_added: {
    height: 56,
    width: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  add_icon: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  add_price: {
    flexDirection: "row",
    height: 48,
    marginTop: 16,
    justifyContent: "space-between",
    alignItems: "center"
  },
  add_price_text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#57504B"
  },
  input: {
    borderColor: "#DEE4E8",
    borderWidth: 1,
    backgroundColor: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    width: 156
  },
  submit_add:{
    backgroundColor:"#F2E7D3",
    height:56,
    width:"100%",
    marginTop:30,
    // position:"absolute",
    // bottom:20,
    alignItems:"center",
    justifyContent:"center"
  },
  submit_text:{
    color:"#57504B",
    fontSize:12,
    letterSpacing:1.2,
    height:15,
    fontWeight:"600"
  }
})

export default WithoutColors