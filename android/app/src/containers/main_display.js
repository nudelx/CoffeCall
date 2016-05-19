import React, {
  PropTypes,
  View,
  Alert,
  StyleSheet,
} from 'react-native';

import { Component } from 'react';
import { connect } from 'react-redux';
import coffeUserAction from '../actions/get_coffee_user_action.js';
import WelcomeScreen from '../containers/welcome_screen.js';

const styles = StyleSheet.create({
  main_view: {
    marginTop: 10,
    borderWidth: 3,
  },
});

export class Display extends Component {

  static propTypes = {
    coffeUser: PropTypes.string,
    getCoffeeUser: PropTypes.func.isRequired,
  };

  askForCoffeeUser() {
    if (this.props.coffeUser) {
      Alert.alert('debug', 'user found');
    } else {
      Alert.alert('debug', 'user NOT found');
      this.props.getCoffeeUser();
    }
  }

  render() {
    Alert.alert('debug', `render => ${this.props.coffeUser}`);
    this.askForCoffeeUser();
    return (
      <View style={styles.main_view}>
        <WelcomeScreen />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { coffeUser: state.coffeeUserReducer.coffeUser };
}

function mapDispatchToProps(dispatch) {
  return coffeUserAction(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
