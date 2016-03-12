/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View

} from 'react-native';


import app from './android/app/src/app.js';

AppRegistry.registerComponent('CoffeCall', () => app);
