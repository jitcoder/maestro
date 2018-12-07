import ky from 'ky';

const doFetch = async (next) => {
  const results = await ky.get('/mongo/inventory').json();
  next({type: 'INVENTORY_RECEIVED', data:results});
}

export const inventory = (state = [], {type, name, price, index, data}) => {
  console.log(state);
  switch(type) {
    case 'ADD_INVENTORY':
      return state.concat([{name,price}]);
    case 'DELETE_INVENTORY':
      return state.filter((item, i) => i !== index);
    case 'INVENTORY_RECEIVED':
      return data;
    default:
      return state;
  }
}

export const inventoryDataService = store => next => action => {
  next(action);

  switch(action.type){
    case 'FETCH_INVENTORY':
      doFetch(next);
      break;
  }
}
