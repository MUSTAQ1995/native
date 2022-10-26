import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView, StatusBar,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from "yup";
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';

const AddProduct = ({ navigation }) => {
  // states:
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Abaya', value: '1' },
    { label: 'Dresses', value: '2' },
    // { label: 'Mango', value: 'mango' },
    // { label: 'Grapes', value: 'grape' },
    // { label: 'Jackfruit', value: 'jackfruit' },
    // { label: 'naa', value: 'anana' }
  ]);

  const validation = Yup.object().shape({
    category_id: Yup.string(),
    // .required("Select a Category"),
    title: Yup.string().required("Field is Required"),
    ar_title: Yup.string().required("Field is Required"),
    description: Yup.string().required("Field is Required"),
    ar_description: Yup.string().required("Field is Required"),
    variation: Yup.array()
  })

  const initialValues = {
    category_id: "",
    title: "",
    ar_title: "",
    description: "",
    ar_description: "",
    variation: [],
  };


  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: values => {
      console.log(values, "formik values")
      navigation.navigate("productdetails", {values: values})
      // console.log(value, "value of the dropdown")
    }
  })

  const [titleEng, setTitleEng] = useState("");
  const [titleArb, setTitleArb] = useState("");


  const handleEngTitle = (text) => {
    console.log(text, "text")
  };

  const handleProductDetails = () => {
    navigation.navigate("productdetails")
  }
  return (
    <View style={styles.container} >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview} >
        <View style={styles.steps} >
          <View style={styles.stepOne} >
            <Text style={styles.one} > 1</Text>
            <Text style={styles.details} >Details</Text>
          </View>
          <View style={styles.line} ></View>
          <View style={styles.stepTwo} >
            <Text style={styles.two} > 2</Text>
            <Text style={styles.details} >Upload Pic</Text>
          </View>
        </View>
        <View style={styles.body} >
          <View style={styles.category} >
            <Text style={styles.categoty_info} >Category Info</Text>
          </View>
          <View style={styles.select_category} >
            <Text style={styles.select_category_info} >SELECT CATEGORY</Text>
          </View>
          <View style={styles.dropdown}>
            <DropDownPicker
              style={{
                borderColor: "lightgray",
              }}
              open={open}
              value={formik.values.category_id}
              items={items}
              setOpen={setOpen}
              setItems={setItems}
              onSelectItem={({value})=>{
                formik.setFieldValue('category_id',value);
              }}
              autoScroll={true}
              
              // theme="LIGHT"
              // // multiple={true}
              // mode="BADGE"
              // autoScroll={true}
              // badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
            />
            {formik.touched.category_id && formik.errors.category_id && <Text style={styles.error} >{formik.errors.category_id}</Text>}
          </View>
          <View style={styles.lineTwo} ></View>
          <View style={styles.title} >
            <Text style={styles.title_text} >Title</Text>
          </View>
          <View style={styles.english} >
            <Text style={styles.english_text} >IN ENGLISH</Text>
            <TextInput
              name="title"
              id="title"
              style={styles.eng_inut}
              value={formik.values.title}
              onBlur={formik.handleBlur('title')}
              placeholder="Enter English Title"
              onChangeText={formik.handleChange("title")}
            />
            {formik.touched.title && formik.errors.title && <Text style={styles.error} >{formik.errors.title}</Text>}
          </View>
          <View style={styles.arabic} >
            <Text style={styles.english_text} >IN ARABIC</Text>
            <TextInput
              name="ar_title"
              id="ar_title"
              style={styles.eng_inut}
              // defaultValue={titleEng}
              value={formik.values.ar_title}
              onBlur={formik.handleBlur('ar_title')}
              placeholder="Enter Arabic Title"
              onChangeText={formik.handleChange("ar_title")}
            />
            {formik.touched.ar_title && formik.errors.ar_title && <Text style={styles.error} >{formik.errors.ar_title}</Text>}
          </View>
          <View style={styles.lineTwo} ></View>
          <Text style={styles.product_dsc} >Product Description</Text>
          <View style={styles.description} >
            <View>
              <Text style={styles.dsc_eng} > IN ENGLISH </Text>
              <TextInput
                name="description"
                id="description"
                style={[styles.text_area]}
                multiline
                numberOfLines={5}
                placeholder="Enter Description"
                value={formik.values.description}
                onBlur={formik.handleBlur('description')}
                onChangeText={formik.handleChange("description")}
              />
              {formik.touched.description && formik.errors.description && <Text style={styles.error} >{formik.errors.description}</Text>}
            </View>
            <View style={styles.arabic_dsc}>
              <Text style={styles.dsc_arb} > IN ARABIC </Text>
              <TextInput
                name="ar_description"
                id="ar_description"
                style={styles.text_area}
                multiline
                numberOfLines={5}
                placeholder="Enter Description"
                value={formik.values.ar_description}
                onBlur={formik.handleBlur('ar_description')}
                onChangeText={formik.handleChange("ar_description")}
              />
              {formik.touched.ar_description && formik.errors.ar_description && <Text style={styles.error} >{formik.errors.ar_description}</Text>}
            </View>
            <TouchableOpacity
              // onPress={() => handleProductDetails()}
              onPress={() => formik.handleSubmit()}
              style={styles.continue} >
              <Text style={{
                color: "#57504B",
                fontWeight: "bold",
                fontSize: 12,
              }} >
                CONTINUE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // position:"relative",
  },
  scrollview: {
    backgroundColor: "#fff",
    width: "100%"
  },
  steps: {
    marginTop: 27,
    height: 45,
    // width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    // position:"relative"
  },
  stepOne: {
    alignItems: "center"
  },
  one: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#58504A",
    color: "#fff",
    paddingLeft: 3,
  },
  line: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 1,
    width: "81%",
    marginTop: 10,
    marginHorizontal: 34,
    position: "absolute"
  },
  stepTwo: {
    alignItems: "center",
  },
  two: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#C6C6C6",
    color: "#fff",
    paddingLeft: 3,
  },
  body: {
    marginTop: 15,
    height: 800,
    // width: "100%",
    marginHorizontal: 16,
  },
  category: {
    height: 20,
    width: 97,
    marginTop: 15,
    // marginLeft:16,

  },
  categoty_info: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#57504B"
  },
  select_category: {
    width: 138,
    height: 20,
    marginTop: 10,
  },
  select_category_info: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "left",
    color: "#57504B",
    fontFamily: "GreatVibes-Regular",
  },
  dropdown: {
    alignItems: 'center',
    height: 52,
    width: "100%",
    marginTop: 6,
    // marginLeft:15,
  },
  lineTwo: {
    height: 4,
    width: 500,
    backgroundColor: "#EFEFEF",
    marginTop: 20,
    marginLeft: -20
  },
  title: {
    width: 31,
    height: 16,
    marginTop: 15,
  },
  title_text: {
    fontSize: 14,
    color: "#57504B",
    fontWeight: "bold"
  },
  english: {
    // width: 360,
    height: 73,
    marginTop: 14,
  },
  english_text: {
    width: 83,
    height: 13,
    fontSize: 12,
    color: "#57504B",
    fontWeight: "bold",
    letterSpacing: 1.2
  },
  eng_inut: {
    height: 52,
    // width: 360,
    marginTop: 8,
    borderColor: "#DEE4E8",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 17,
    color: '#000',
  },
  arabic: {
    // width: 360,j
    height: 73,
    marginTop: 19,
  },
  textstyle: {
    color: "#57504B"
  },
  product_dsc: {
    width: 141,
    height: 16,
    fontSize: 14,
    marginTop: 15,
    color: "#000",
  },
  description: {
    marginTop: 14,
    // width: 360,
    height: 129,
  },
  dsc_eng: {
    width: 83,
    height: 13,
    fontSize: 12,
    letterSpacing: 1.2,
    color: "#57504B",
    fontWeight: "bold",
    marginLeft: -4,

  },
  text_area: {
    marginTop: 8,
    // width: 360,
    height: 108,
    borderRadius: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    paddingLeft: 17,
    color: '#000',
    paddingBottom: 10,
  },
  arabic_dsc: {
    height: 129,
    // width: 360,
    marginTop: 14,
  },
  dsc_arb: {
    width: 75,
    height: 13,
    fontSize: 12,
    letterSpacing: 1.2,
    color: "#57504B",
    fontWeight: "bold",
    marginLeft: -4,
  },
  continue: {
    height: 56,
    // width: 360,
    marginTop: 20,
    backgroundColor: "#F2E7D3",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
    fontSize: 12
  }
})

export default AddProduct;