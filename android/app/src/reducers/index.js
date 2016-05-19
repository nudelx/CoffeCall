import { combineReducers } from 'redux';
import coffeeUserReducer from './coffee_user_reducer';

const rootReducer = combineReducers({
	// state: (state = {}) => state
  coffeeUserReducer,
});

export default rootReducer;
