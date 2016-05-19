import { createAction } from 'redux-actions';
import ACTIONS from '../const/actions_constants';
import { AsyncStorage, Alert } from 'react-native';

const coffeeUserReceived = createAction(
    ACTIONS.GET_COFFEE_USER, (opts = {}) => opts
);


const coffeUserAction = (dispatch) => {
  return {
    getCoffeeUser: () => {
      AsyncStorage.getItem('coffeeUser', (err, data) => {
        Alert.alert(`user_data ${data}`);
        dispatch(coffeeUserReceived({ testUser: data }));
      });
    },
  };
};
export default coffeUserAction;
