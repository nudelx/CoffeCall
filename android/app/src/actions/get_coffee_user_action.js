import { createAction } from 'redux-actions';
import ACTIONS from '../const/actions_constants';
import React, { AsyncStorage , Alert} from 'react-native';

const coffeeUserReceived = createAction(
    ACTIONS.GET_COFFEE_USER, (opts = {}) => opts
)


const coffeUserAction = (dispatch) => {
    return {
        getCoffeeUser:() => {
            AsyncStorage.getItem('coffeeUser',function(err, data){
                Alert.alert("get user => " + data);
                dispatch(coffeeUserReceived({testUser:data}))

            });

        }
    }


}


export default coffeUserAction
