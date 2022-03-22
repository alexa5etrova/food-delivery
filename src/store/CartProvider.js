import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalSum: 0,
};
const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedTotalSum =
      state.totalSum + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item=>item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];

    
    let updatedItems;

    if(existingCartItem){
      let updatedItem = {...existingCartItem,
      amount: existingCartItem.amount + action.item.amount};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex]=updatedItem;
    }else{
      updatedItems = state.items.concat(action.item);
    }
    
      
    
    return {
      items: updatedItems,
      totalSum: updatedTotalSum,
    };
  } else if (action.type === "REMOVE_ITEM") {
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );
  const addItemToContext = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromContext = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalSum: cartState.totalSum,
    addItem: addItemToContext,
    removeItem: removeItemFromContext,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
