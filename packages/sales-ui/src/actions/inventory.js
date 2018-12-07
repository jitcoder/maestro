
export const addInventory = (name, price) => ({type: 'ADD_INVENTORY', name, price});
export const deleteInventory = (index) => ({type: 'DELETE_INVENTORY', index});
export const fetchInventory = () => ({type:'FETCH_INVENTORY'});
