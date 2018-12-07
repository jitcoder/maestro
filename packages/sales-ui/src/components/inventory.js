import React from 'react';

const Inventory = ({name, price, onClick}) => (
  <li onClick={onClick}>{name} - ${price}</li>
)

export default Inventory;