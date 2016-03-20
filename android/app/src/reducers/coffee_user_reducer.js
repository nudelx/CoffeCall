import { handleActions } from 'redux-actions';
import ACTIONS from '../const/actions_constants';


const defaultState = {

	coffeUser: 0,
	data:[]

}


export default handleActions({

	[ACTIONS.GET_COFFEE_USER]: (state, {payload}) => {
		debugger
		state.coffeUser  = payload.testUser
		return {...state}
	}

}, defaultState)