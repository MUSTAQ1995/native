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
import { Provider as PaperProvider } from "react-native-paper";
import { MenuProvider } from 'react-native-popup-menu';


// enableLatestRenderer();
const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <PaperProvider>
      <MenuProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <AppRouter />
          </SafeAreaView>
        </NavigationContainer>
      </MenuProvider>
    </PaperProvider>
  );
};

export default App;
