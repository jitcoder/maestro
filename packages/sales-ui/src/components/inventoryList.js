import React from 'react';
import Inventory from './inventory';

const InventoryList = ({items, onInventoryClick}) => (
  <ul>
    {
      items.map((item, index) => (
        <Inventory key={index} {...item} onClick={() => onInventoryClick(index)} />
      ))
    }
  </ul>
)

export default InventoryList;
