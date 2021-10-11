import Modal from '../UI/Modal';
import Styles from '../cart/Cart.module.css';
import CartItem from '../cart/CartItem';
import CartSummary from './CartSummary';
import useFetch from '../hooks/useFetch';
import React, { useState } from 'react';
import MessageContainer from '../UI/MessageContainer';

const Cart = (props) => {

    const [orderComplete, setOrderComplete] = useState(false);

    const cartItems = props.cartItems;

    //map an array with the right fields to display in the cart
    const cartArray = cartItems.map((el) => {
        return{
            mealName: el.meal.mealName,
            price: el.meal.price,
            amount: el.amount,
            key: el.meal.key
        }
    });

    const [isSubmititng, isError, isSuccessful, orderFetch] = useFetch();

    //This function is async so after the order has been sent if its succesful 
    //the cart with be cleared
    const sendOrder = async (customerData) => {
        
        const orderObject = {
            orderItems: cartArray,
            customer: customerData
        }
        
        const requestConfig = {
            url: 'https://foodorderapp-7e900-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: orderObject
        }
        //Send the order to the firebase backend
        //using dummyFN as there is nothing to do with the respose data
        await orderFetch(requestConfig, dummyFN);
        setOrderComplete(true);
    }

    const successCloseHandler = (event) => {
        props.hideCart();
    }

    const retryOrderHandler = (event) => {
        props.hideCart();
    }

    const cartContent = (           
        <React.Fragment>
            <ul className={Styles.listContainer}>
                {cartArray.map((el)=> {
                    return <CartItem meal={el} manageCart={props.manageCart}/>
                })}
            </ul> 
            <CartSummary closeCart={props.hideCart} cartItems={cartArray} sendOrder={sendOrder}></CartSummary>
        </React.Fragment>
        );  


    const successfulOrderMessage = (
        <MessageContainer>            
            <p>The order has been sent succesful</p>
            <button onClick={successCloseHandler}>Close</button>
        </MessageContainer>);

    
    const sendingOrderMessage = (
        <MessageContainer>
            <p>The order is being sent...</p>
        </MessageContainer>
    );

    const orderErrorMessage = (
        <MessageContainer>
            <p>There has been an error with the order, please try again</p>
            <button onClick={retryOrderHandler}>Try Again</button>
        </MessageContainer>);

    const dummyFN = (data) => {
        console.log('Order request Response');
        console.log(data);
    }

    //If an order fetch attempt has been successful and then clear the cart
    if (orderComplete && !isError && isSuccessful){
        props.clearCart();
        setOrderComplete(false);
    }

    return(
        <Modal hideModal={props.hideCart}>
            <div className={Styles.container}>
                {!isSuccessful && !isSubmititng && !isError && cartContent}
                {!isSuccessful && isSubmititng && !isError && sendingOrderMessage}
                {!isSuccessful && !isSubmititng && isError && orderErrorMessage}
                {isSuccessful && !isSubmititng && !isError && successfulOrderMessage}
            </div>
        </Modal>
    )
}

export default Cart;