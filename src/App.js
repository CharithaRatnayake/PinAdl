/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import PinScreen from './PinScreen';
import ResetPinScreen from './ResetPinScreen';
import MainScreen from './MainScreen';

//init navigation
const MainNavigator = createStackNavigator({
    PinScreen: {screen: PinScreen},
    ResetPinScreen: {screen: ResetPinScreen},
    MainScreen: {screen: MainScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
