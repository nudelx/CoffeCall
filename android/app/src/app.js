import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TextInput,
  AsyncStorage

} from 'react-native';

import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


import ToolbarAndroid  from 'ToolbarAndroid';
import logo from '../assets/images/sacoffeelogo.png';
import Display from './containers/main_display'





export default class CoffeCall extends Component {



  render() {

    return (
      <Provider store={ createStoreWithMiddleware(reducers) }>
        <View >
          <ToolbarAndroid
          logo={logo}
          show="always"
          style={styles.toolbar} />
          <Display />
        </View>
      </Provider>

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

  },
  modalButton: {
    marginTop: 10,
  },
});





