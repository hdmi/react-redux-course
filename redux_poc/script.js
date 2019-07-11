// Redux proof of concept
console.clear()

//Action creators returning actions
const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name, amount
    }
  }
};

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name, amount
    }
  }
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  }
};

//Reducers
const claimsHistory = (oldHistory = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    return [...oldHistory, action.payload]
  }
  return oldHistory;
};

const accounting = (oldAmount = 100, action) => {
  if(action.type === 'CREATE_CLAIM'){
    return oldAmount - action.payload.amount;
  } else if (action.type === 'CREATE_POLICY') {
    return oldAmount + action.payload.amount;
  }
  return oldAmount;
};

const policies = (oldPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    return [...oldPolicies, action.payload.name]
  } else if(action.type === 'DELETE_POLICY') {
    return oldPolicies.filter(name => name !== action.payload.name)
  }
  return oldPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting, claimsHistory, policies
});

//State 'repository'
const store = createStore(ourDepartments);

//Action dispatching
store.dispatch(createPolicy('Alex', 30));
store.dispatch(createPolicy('Juliet', 50));
store.dispatch(createPolicy('Clide', 40));
store.dispatch(createClaim('Juliet', 90));
store.dispatch(deletePolicy('Juliet'));

console.log(store.getState());
