import {combineReducers} from 'redux';

const counterReducer = (storedValue = 0, action) => {

  if(action.type === 'INCREMENT_COUNTER'){
    return storedValue + 1;
  } else if (action.type === 'DECREMENT_COUNTER'){
    return storedValue - 1;
  }

  return storedValue;
}

export default combineReducers({counterReducer});
