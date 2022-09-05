/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/Navigations/AppRouter';
// import {enableLatestRenderer} from 'react-native-maps';
import SplashScreen from 'react-native-splash-screen';


// enableLatestRenderer();
const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
        <AppRouter/>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
