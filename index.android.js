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


import reducers from './android/app/src/reducers/index';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



import ToolbarAndroid  from 'ToolbarAndroid';
import logo from './android/app/assets/images/sacoffeelogo.png';

class CoffeCall extends Component {
  render() {
    return (

      <View >
        <ToolbarAndroid
        logo={logo}
        show="always"
        style={styles.toolbar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 5,
  },
  toolbar: {
    margin: 10,
    height: 56,
  }
});

AppRegistry.registerComponent('CoffeCall', () => CoffeCall);
