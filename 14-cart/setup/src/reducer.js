/* uzima se state iz context.js 
a action sluzi za dispatch funkcije koje 
manipulisu stat-om preko 'tupe'
*/
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    /* vraca cijeli state objekat ali cart postavlja na prazan [] */
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      /*brise odredjeni item iz cart array-a
       u payloadu je id iz komponente */
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  /*   if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item; 
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  } */

  /* objedinjeni action i za increase i za decrease */
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        /* if pa unutar njega 2 if-a */
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    /* REDUCE funkcija sa objektom  
    reduce uvijek vraca PRVI PARAMETAR, u ovom slucaju to je object{total,amount} */
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem; // poj. item iz data.js
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        //ovo je cartTotal tj total i amount iz glavnog state-a i on se vraca
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2)); // da budu samo 2 cifre poslije zareza
    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  throw new Error("no matching action type");
};

export default reducer;
