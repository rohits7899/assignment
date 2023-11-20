import React, { useReducer, useState } from 'react';

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

  const addItemToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...newItem, id: Date.now() } });
    setNewItem({ name: '', quantity: 0 });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 0 })}
      />
      <button onClick={addItemToCart}>Add Item</button>
      
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;