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

var ToolbarAndroid = require('ToolbarAndroid');



class CoffeCall extends Component {
  render() {
    return (

      <View >
        <ToolbarAndroid
        title="Samanage Coffee Call v.1"
        logo={require('./android/app/assets/images/sacoffeelogo.png')}
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
    height: 56

  }
});

AppRegistry.registerComponent('CoffeCall', () => CoffeCall);
