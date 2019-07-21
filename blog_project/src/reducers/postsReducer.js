export default (prevState = [], action) => {

  switch(action.type){
    case 'FETCH_POST':
      return action.payload;
  }
  
  return prevState;
}
