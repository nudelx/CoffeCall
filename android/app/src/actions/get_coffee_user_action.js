import { createAction } from 'redux-actions';
import ACTIONS from '../const/actions_constants';

const coffeeUserReceived = createAction(
  ACTIONS.GET_COFFEE_USER, (opts = {}) => opts
)


const coffeUserAction = (dispatch) => {
	return {
		getCoffeeUser:() => {

			dispatch(coffeeUserReceived({testUser:'alex'}))
		}
	}


}


export default coffeUserAction