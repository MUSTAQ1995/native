import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native';
import StarRating from "react-native-star-rating";
import { useFocusEffect } from '@react-navigation/native';
import { getSingleProductDetails } from '../../../../redux/actions/signup.action';
import Loader from '../Reusable/Loader';

const SingleProductDetails = ({ route }) => {

  const [selectedColor, setSelectedColor] = useState();
  const [starCount, setStarCount] = useState(3.5);
  const [singleProductDetails, setSingleProductDetails] = useState(null)

  const { productID } = route.params;
  console.log(productID, "productID");

  useFocusEffect(
    useCallback(() => {
      getSingleProductDetails(productID)
        .then(res => {
          console.log(res.data.response, "single product details")
          setSingleProductDetails(res.data.response)
        })
        .catch(error => {
          console.log(error, "Error in Single Project Details")
        })
    }, [])
  )
  return (
    <>
      {
        singleProductDetails ?

          <View style={styles.container} >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scroll_view}
            >
              <Image
                style={styles.product_image}
                source={require("../../../../assets/lagoba_assets/bckgn.png")}
              />
              {/* source={{
            uri: singleProductDetails?.image
          }} */}
              <View style={styles.product_details} >
                <Text style={styles.product_name} >{singleProductDetails.title}</Text>
                <Text style={styles.product_category} >{singleProductDetails.description}</Text>
                <View style={styles.price_share} >
                  <Text style={styles.price} >SAR 500</Text>
                  <View style={styles.icons} >
                    <Image
                      source={require("../../../../assets/lagoba_assets/heart.png")}
                      style={styles.heart}
                    />
                    <Image
                      source={require("../../../../assets/lagoba_assets/share.png")}
                      style={styles.share}
                    />
                  </View>
                </View>
                <Text style={styles.colors_text} >COLORS</Text>
                <View style={styles.multi_color} >
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                      width: "100%"
                    }}
                  >
                    {
                      Array(8).fill().map((data, i) => {
                        return (
                          <View key={i} style={styles.select_colors} >
                            <View style={styles.specific_color} ></View>
                          </View>
                        )
                      })
                    }
                  </ScrollView>
                </View>
                <View style={styles.basic_details} >
                  <Text style={styles.basic_details_text}>BASIC DETAILS</Text>
                  <View style={{ height: 148, }} >
                    {singleProductDetails.attributes.map((attributes, i) => {
                      return (
                        <Text key={attributes.id} style={styles.fabric} >{attributes.title}: {attributes.value}</Text>
                      )
                    })}

                    {/* <Text style={styles.fabric} >Length 187 cm, width 84 cm </Text>
              <Text style={styles.fabric} >
                The item is without the accessories (Hijab Cap and Hijab pins) worn by the model.
              </Text>
              <Text style={styles.fabric} >
                Colours displayed may vary slightly due to changes in lighting.
              </Text> */}
                  </View>
                </View>
                <View style={styles.reviews} >
                  <Text style={styles.reviews_text} >REVIEWS</Text>
                  <View style={{ width: 100, height: 30 }} >
                    <StarRating
                      disabled={false}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={starCount}
                      fullStarColor={'red'}
                      selectedStar={(rating) => setStarCount(rating)}
                    />
                  </View>
                  <View style={styles.comments} >
                    <View style={styles.users_first_letter} >
                      <Text style={styles.first_letter} >S</Text>
                    </View>
                    <View style={styles.users_data} >
                      <Text style={styles.user_name} >Sehnaaz Khan</Text>
                      <View style={{ width: 100, height: 30, marginTop: 7, }} >
                        <StarRating
                          disabled={false}
                          emptyStar={'ios-star-outline'}
                          fullStar={'ios-star'}
                          halfStar={'ios-star-half'}
                          iconSet={'Ionicons'}
                          maxStars={5}
                          rating={starCount}
                          fullStarColor={'red'}
                          selectedStar={(rating) => setStarCount(rating)}
                        />
                      </View>
                      <Text style={styles.comment}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View> :
          <Loader/>

  }
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll_view: {
    flex: 1,
  },
  product_image: {
    height: 480,
    width: "100%"
  },
  product_details: {
    width: "100%",
    height: "100%",
    marginTop: 21,
    paddingHorizontal: 16,
  },
  product_name: {
    height: 18,
    fontSize: 16,
    fontWeight: "bold",
    color: "#57504B"
  },
  product_category: {
    height: 13,
    marginTop: 12,
    fontSize: 12,
    fontWeight: "bold",
    color: "#57504B",
  },
  price_share: {
    marginTop: 17,
    flexDirection: "row",
    height: 21,
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#57504B",
    flex: 0.8
  },
  icons: {
    flexDirection: "row",
    flex: 0.2,
    justifyContent: "space-between"
  },
  heart: {
    height: 13,
    width: 14
  },
  share: {
    height: 13,
    width: 13
  },
  multi_color: {
    marginTop: 13,
    height: 38
  },
  colors_text: {
    height: 13,
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
    color: "#8D8D8D",
  },
  select_colors: {
    height: 38,
    width: 38,
    borderRadius: 19,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center"
  },
  specific_color: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: "#E2D7C2"
  },
  basic_details: {},
  basic_details_text: {
    height: 13,
    marginTop: 24,
    fontSize: 12,
    color: "#8D8D8D",
    letterSpacing: 1.2,
    fontWeight: "bold"
  },
  fabric: {
    fontSize: 12,
    color: "#57504B",
    fontWeight: "bold",
    marginTop: 13
  },
  reviews: {
    marginTop: 20,
  },
  reviews_text: {
    marginTop: 16,
    height: 13,
    fontSize: 12,
    color: "#8D8D8D",
    fontWeight: "bold",
    letterSpacing: 1.2
  },
  comments: {
    height: 120,
    marginTop: 19,
    flexDirection: "row",
    marginBottom: 50
  },
  users_first_letter: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    backgroundColor: "#E2D7C2",
    alignItems: "center",
    justifyContent: "center",
  },
  first_letter: {
    // height:33,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  },
  users_data: {
    marginLeft: 24,
    marginTop: 3,
    flex: 0.9
  },
  user_name: {
    height: 16,
    fontSize: 14,
    color: "#57504B",
    fontWeight: "bold"
  },
  comment: {
    marginTop: 7,
    color: "#726D69",
    fontSize: 14,
    fontWeight: "bold",
    height: 69
  }
});

export default SingleProductDetails;