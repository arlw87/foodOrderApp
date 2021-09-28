import Header from "./components/layout/Header"
import Main from "./components/layout/Main";
import { useReducer } from 'react';
import Modal from './components/UI/Modal';


const cartReducer = (state, action) => {
  console.log('Reducer: ', action);
  console.log(state);
  switch(action.type)
  {
    case 'CART.ADD':
      console.log('Debug1');
      //If the meal item is already in the cart then map the old state onto the new state with
      //the additional meals
      if (state.filter(e => e.meal.key === action.item.meal.key).length > 0){
        return state.map(el => {
          if (el.meal.key === action.item.meal.key){
            return {
              meal: el.meal,
              amount: el.amount + action.item.amount
            }
          }
          return el;        
        })
      }
      //if the meal is not already in the cart then add it to the cart array
      return [...state, action.item];

    default: 
      console.log('Reached Default');
      break;
  }  
}



function App() {

  const [cart, updateCart] = useReducer(cartReducer, []);

  const addToCart = (obj) => {
    console.log('App (AddToCart): ', obj);
    const obj2 = {
      type: 'CART.ADD',
      item: obj
    }
    updateCart(obj2);
  }

  console.log('Cart: ', cart);

  return (
    <div>
      <Header cart={cart}/>
      <Main addToCart={addToCart}/>
      <Modal></Modal>
    </div>
  );
}

export default App;
