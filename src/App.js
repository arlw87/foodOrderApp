import Header from "./components/layout/Header"
import Main from "./components/layout/Main";
import { useReducer, useState } from 'react';
import Cart from './components/cart/Cart';


//Cart Reducer used in useReducer Hook
//test for github
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
    case 'CART.SUBTRACT':
      return state.map(el => {
        if (el.meal.key === action.item.meal.key){
          return{
            meal: el.meal,
            amount: el.amount + action.item.amount
          }
        }
        return el;
        });
    case 'CART.REMOVE':
      return state.filter(el => el.meal.key !== action.item.meal.key);
    case 'CART.CLEAR':
      return [];
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

  const viewCart = () => {
    updateDisplayCart(true);
  }

  const exitCart = () => {
    console.log('exit cart');
    updateDisplayCart(false);
  }

  const clearCart = () => {
    console.log('Claering cart ....');
    updateCart({
      type: 'CART.CLEAR',
      item: {}
    })
  }

  const [displayCart, updateDisplayCart] = useState(false);

  //Handles if an item is increased or decreased in the cart
  const manageCart = (item) => {

    //get the meal Object from the cart using the id
    const mealObj = cart.reduce((acc, cur) => {
      if (cur.meal.key === item.key){
        return cur.meal;
      }
      return acc;      
    },'undefined');

    console.log(item.value);

    if (item.value === 1){
      const obj = {
        type: 'CART.ADD',
        item: {
          amount: 1,
          meal: mealObj
        }
      }
      updateCart(obj);
    } else {
      console.log('debug Subtract')
      //get the amount of meals in cart for that item
      const mealAmount = cart.reduce((acc, cur) => {
        if (cur.meal.key === item.key){
          return cur.amount;
        }
        return acc;      
      },'undefined');
      
      //remove one meal from the multiple meals
      if (mealAmount > 1){
        const subtractMealObj = {
          type: 'CART.SUBTRACT',
          item: {
            amount: -1,
            meal: mealObj
          }
        }
        updateCart(subtractMealObj);
      } else {
        //only one meal of that type left so remove the 
        //meal from the cart completely
        const removeMealItemObj = {
          type: 'CART.REMOVE',
          item: {
            amount: 0,
            meal: mealObj
          }
        }
        updateCart(removeMealItemObj);
      }
    }
  }

  console.log('display cart ', displayCart);
  
  return (
    <div>
      <Header cart={cart} showCart={viewCart}/>
      <Main addToCart={addToCart}/>
      {displayCart?<Cart cartItems={cart} hideCart = {exitCart} addToCart={addToCart} manageCart={manageCart} clearCart={clearCart} showCart={viewCart}/>:''}
    </div>
  );
}

export default App;
