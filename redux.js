import { legacy_createStore as createStore } from "redux";

/**
 * reducer
 * kondisi action untuk mengubah store sesuai dengan action type
 */
const intialState = {
  cart: [],
};
const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state
  }
};

/**
 * store
 * wadah untuk reducer / penyimpanan
 */

const store = createStore(cartReducer);
console.log("oncreate store", store.getState());

/**
 * subscribe
 * untuk melihat hasil perubahan dari dispatch ke reducer dalam store
 */
store.subscribe(() => {
    console.log("onchange store", store.getState());
})


/**
 * dispatch
 * mengirimkan action ke reducer
 */
const action1 = { type: "ADD_TO_CART", payload: { id: 1, qty: 20 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 11, qty: 200 } };
store.dispatch(action2);

/**
 * jalankan dengan node redux diterminal
 */