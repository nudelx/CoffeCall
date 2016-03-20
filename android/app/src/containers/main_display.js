import React, {
	Text,
	TextInput,
	View,
	AsyncStorage,
	Alert,
	StyleSheet,
	TouchableHighlight,
	Image

} from 'react-native';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import coffeUserAction from '../actions/get_coffee_user_action.js'
import submitImg from '../../assets/images/submit.png';
import WelcomeScreen from '../containers/welcome_screen.js'

export default class Display extends Component {


	askForCoffeeUser(){
		debugger
		if (this.props.coffeUser) {
			debugger
			Alert.alert("debug",'user found')
		} else {
			Alert.alert("debug",'user NOT found')

			this.props.getCoffeeUser()

		}
	}

  render() {
  	this.askForCoffeeUser();
    return (
    	<View  style={styles.main_view}>
    		<WelcomeScreen/>
    	</View>
    );
  }
}

function mapStateToProps(state) {

		return {coffeUser: state.coffeeUserReducer.coffeUser};
}

function mapDispatchToProps(dispatch){
	return coffeUserAction(dispatch)
}

const styles = StyleSheet.create({

main_view: {
	marginTop: 10,
	// borderWidth: 3
}

});

export default connect( mapStateToProps , mapDispatchToProps)(Display)