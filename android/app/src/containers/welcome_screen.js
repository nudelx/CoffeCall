
import React, {
    Text,
    TextInput,
    View,
    AsyncStorage,
    Alert,
    StyleSheet,
    TouchableHighlight,
    Image,

} from 'react-native';
import { Component } from 'react';
// import coffeUserAction from '../actions/get_coffee_user_action.js';
import submitImg from '../../assets/images/submit.png';


const styles = StyleSheet.create({

  main_view: {
    marginTop: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
    color: '#301500',
  },

  nameInput: {
    height: 40,
    borderWidth: 1,
    color: '#301500',
    fontSize: 15,
    textAlignVertical: 'top',
    marginTop: 30,
  },

  inputHolder: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  submitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  welcomeText: {
    padding: 10,
    color: '#301500',
    fontSize: 16,
  },

});

export default class Welcome extends Component {
  constructor() {
    super();
    this.setUser = this.setUser.bind(this);
    this.showText = this.showText.bind(this);
  }

  setUser() {
    AsyncStorage.setItem('coffeeUser', this.userName, () => {
      Alert.alert('done');
    });
  }

  showText(text) {
    this.userName = text;
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> Welcome to Samanage Coffee Call </Text>
        <View style={styles.inputHolder}>
          <Text style={styles.welcomeText}>
            Welcome to our simple coffee call app.
            This app will allow you to create or be part
            of next coffee call in our office.
          </Text>

          <Text style={styles.welcomeText}>
            In order to be part of this action please enter your nick name
            to be notificated by the app.
          </Text>
          <TextInput
            ref="Name"
            autoFocus={true}
            onChangeText={this.showText}
            placeholder={'Please enter your name here '}
            style={styles.nameInput}
          />
        </View>
        <TouchableHighlight style={styles.submitBtn} onPress={this.setUser}>
          <Image style={styles.button} source={submitImg} />
        </TouchableHighlight>
      </View>
    );
  }
}

