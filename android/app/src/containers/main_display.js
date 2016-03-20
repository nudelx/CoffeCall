import React, {
	Text,
	TextInput,
	View,
	AsyncStorage,
	Alert,
	StyleSheet,
	TouchableHighlight

} from 'react-native';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import coffeUserAction from '../actions/get_coffee_user_action.js'

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
    	<Text  style={styles.title} >Welcome to Samanage Coffee Call </Text>

    	<View style={styles.inputHolder}>
    		<TextInput
          	autoFocus = {true}
          	placeholder = {'enter your name or nicname blya'}
    				style={styles.nameInput}
    				/>
    	</View>

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
	marginTop: 10
},

title:{
	textAlign: 'center',
	fontSize: 24,
	marginBottom: 20
},

nameInput:{
	height: 40,
	borderWidth: 1,
	color: 'blue',
	textAlignVertical: 'top'
},

inputHolder:{
	borderWidth: 2,



}

});

export default connect( mapStateToProps , mapDispatchToProps)(Display)