import React, {
	Text,
	TextInput,
	View,
	AsyncStorage,
	Alert

} from 'react-native';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import coffeUserAction from '../actions/get_coffee_user_action.js'

export default class Display extends Component {

	componentWillMount () {
		debugger
		if (this.props.coffeUser) {
			Alert.alert("debug",'user found')
		} else {
			Alert.alert("debug",'user NOT found')

		}

	}

  render() {

    return (
    	<View>
    	<Text>Check Name Exist</Text>
    		<TextInput
          	autoFocus = {true}
          	placeholder = {'enter your name or nicname blya'}
    				style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    				 />
    	</View>
    );
  }
}

function mapStateToProps(state) {   /// like state.weather

		return state; /// like { weather:weather }
}

function mapDispatchToProps(dispatch){
	return coffeUserAction(dispatch)
}

export default connect( null , mapDispatchToProps)(Display)