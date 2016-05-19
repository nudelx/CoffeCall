import { handleActions } from 'redux-actions';
import ACTIONS from '../const/actions_constants';

const defaultState = {
  coffeUser: undefined,
  data: [],
};


export default handleActions({

  [ACTIONS.GET_COFFEE_USER]: (state, { payload }) => {
    return { ...state, ...{ coffeUser: payload.testUser } };
  },
}, defaultState);
