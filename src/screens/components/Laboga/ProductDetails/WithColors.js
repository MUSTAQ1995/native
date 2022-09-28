import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import CustomDivider from '../Reusable/CustomDivider';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const WithColors = () => {

  // states:
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(["apple"]);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Mango', value: 'mango' },
    { label: 'Grapes', value: 'grape' },
    { label: 'Jackfruit', value: 'jackfruit' },
    { label: 'naa', value: 'anana' }
  ]);
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
      <View style={styles.body} >
        <Text style={styles.select_color} >
          Select Color
        </Text>
        <View style={styles.dropdown}>
          <DropDownPicker
            style={{
              borderColor: "lightgray",
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            theme="LIGHT"
            multiple={true}
            mode="BADGE"
            autoScroll={true}
            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
          />
        </View>
        <View 
          
        style={styles.upload_photos} >
          <TouchableOpacity onPress={() => getGalleryImage()} >
          <Image
            source={require("../../../../assets/lagoba_assets/upload-icon.png")}
            style={styles.upload_icon}
          />
          <Text style={styles.upload_photo_text} >
            Upload Photo
          </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.add_photos} >Add Photos</Text>
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
            {/* <Image
              source={require("../../../../assets/lagoba_assets/added-photo.png")}
              style={styles.photo_added}
            /> */}
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
        <View style={styles.add_price} >
          <Text style={styles.add_price_text} >ADD PRICE</Text>
          <TextInput
            placeholder="Enter Price"
            style={styles.input}
            onChangeText={setPrice}
            value={price}
          />
        </View>
        <CustomDivider />
        <View style={styles.more_colors} >
          <Text style={styles.more_colors_text}>Have more colors of this?</Text>
          <Text style={styles.add_newcolor} >Add new color</Text>
        </View>
        <CustomDivider />
        <View style={{ flexDirection: "row", marginTop: 13 }} >
          <Text style={styles.country_text} >Country</Text>
          <Text style={styles.price_text} >Price</Text>
        </View>
        <View style={styles.country_prices} >
          <Text style={styles.country_name} >INDIA</Text>
          <TextInput
            placeholder="Enter Price"
            style={styles.country_price_input}
            onChangeText={setPrice}
            value={price}
          />
        </View>
        <View style={styles.country_prices} >
          <Text style={styles.country_name} >INDIA</Text>
          <TextInput
            placeholder="Enter Price"
            style={styles.country_price_input}
            onChangeText={setPrice}
            value={price}
          />
        </View>
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
    // paddingHorizontal:16
  },
  body:{
    width:"100%"
  },
  select_color: {
    marginTop: 13,
    width: 86,
    height: 16,
    fontSize: 14,
    fontWeight: "700",
    color: "#57504B",
  },
  dropdown: {
    marginTop: 16,
    // width: 380,
  },
  upload_photos: {
    marginTop: 12,
    height: 116,
    borderWidth: 1,
    borderColor: "#DEE4E8",
    alignItems: "center",
    justifyContent: "center"
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
    flexDirection: "row"
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
    fontSize: 14,
    fontWeight: "600",
    color: "#57504B"
  },
  input: {
    borderColor: "#DEE4E8",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius:10,
    fontSize: 14,
    fontWeight: "bold",
    width: 156
  },
  more_colors: {
    marginTop: 13,
    flexDirection: "row",
    height: 34,
    justifyContent: "space-between"
  },
  more_colors_text: {
    fontSize: 14,
    fontWeight: "600",
    width: 123,
    color: "#57504B"
  },
  add_newcolor: {
    fontSize: 12,
    fontWeight: "600",
    width: 88,
    color: "#57504B",
    textDecorationLine: "underline"
  },
  country_prices: {
    marginTop: 12,
    flexDirection: "row"
  },
  country_name: {
    flex: 0.5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#57504B",
  },
  country_price_input: {
    flex: 0.5,
    borderColor: "#DEE4E8",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius:10,
    fontSize: 14,
    fontWeight: "bold",
    width: 156
  },
  country_text: {
    fontSize: 14,
    color: "#57504B",
    fontWeight: "600",
    flex: 0.5,
  },
  price_text: {
    fontSize: 14,
    color: "#57504B",
    fontWeight: "600",
    flex: 0.5,
  },
  submit_add:{
    backgroundColor:"#F2E7D3",
    height:56,
    width:"100%",
    marginTop:50,
    // position:"absolute",
    bottom:27,
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

export default WithColors