import {connect} from 'react-redux';
import InventoryList from '../components/inventoryList';
import {deleteInventory} from '../actions/inventory';

const mapStateToProps = (state) => {
  return {
    items: state.inventory
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInventoryClick: index => {
      dispatch(deleteInventory(index));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InventoryList);
