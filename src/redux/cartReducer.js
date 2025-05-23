const initialState = { cartItems: [] };

function findItemIndex(cartItems, id) {
  return cartItems.findIndex((item) => item.id === id);
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const idx = findItemIndex(state.cartItems, action.payload.id);
      if (idx > -1) {
        const updated = [...state.cartItems];
        const updatedItem = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        updated[idx] = updatedItem;
        return { ...state, cartItems: updated };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
          },
        ],
      };
    }

    case 'INCREASE_QUANTITY': {
      const idx = findItemIndex(state.cartItems, action.payload);
      if (idx > -1) {
        const updated = [...state.cartItems];
        const updatedItem = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        updated[idx] = updatedItem;
        return { ...state, cartItems: updated };
      }
      return state;
    }

    case 'DECREASE_QUANTITY': {
      const idx = findItemIndex(state.cartItems, action.payload);
      if (idx > -1) {
        const updated = [...state.cartItems];
        const item = updated[idx];
        if (item.quantity > 1) {
          const updatedItem = { ...item, quantity: item.quantity - 1 };
          updated[idx] = updatedItem;
        } else {
          updated.splice(idx, 1);
        }
        return { ...state, cartItems: updated };
      }
      return state;
    }

    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    default:
      return state;
  }
}