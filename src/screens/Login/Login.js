import React, { useState, useRef, useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import { Text, SafeAreaView, View, StyleSheet, TextInput, Button } from 'react-native'




// Seperator Component:
const Separator = () => <View style={styles.separator} />;

//  -----------------------------------------------------------------------

//  custom validation:
const SchemaValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    // .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    // .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    // .matches(/\d/, "Password must have a number")
    // .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is Required"),


})


// Main Component:
const Login = ({ navigation }) => {

  // Ref:
  const formikRef = useRef(null);
  const defaultSelect = useRef(null);

  //initial values:
  const initialData = {
    email: "",
    password: "",
  };
  // ----------------------------------------------------------------------

  //  side-effect:
  useEffect(() => {

    const unsubscribe = navigation.addListener("focus", () => {
      if (formikRef?.current) {
        formikRef.current.values = initialData
        formikRef.current.setErrors({});
      }
    })
  }, [navigation, initialData])

  // handlers:
  const handleNavigate = values => {
    navigation.navigate("Home");
  };

  // ---------------------------------------------------------------------
  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialData}
      validationSchema={SchemaValidation}
      onSubmit={(values, { resetForm, setErrors }) => (
        handleNavigate(values),
        resetForm({ values: "" }),
        setErrors({})
      )}
    >
      {({ handleSubmit, errors, values, handleChange, handleBlur, touched }) => (
        <SafeAreaView style={styles.container} >
          <View>
            <TextInput
              ref={defaultSelect}
              style={styles.input}
              autoFocus
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              name="email"
              placeholder="Enter your username"
            />

            {errors.email && touched.email && <Text style={styles.error} >{errors.email}</Text>}

            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onBlur={handleBlur("password")}
              name="password"
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Enter your Password"
              keyboardType="name-phone-pad"
            />

            {errors.password && touched.password && <Text style={styles.error} >{errors.password}</Text>}

          </View>

          <Button
            onPress={handleSubmit}
            title="Sign In"
          />

        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  error: {
    color: "red",
    marginLeft: 10,
  }
});

export default Login;