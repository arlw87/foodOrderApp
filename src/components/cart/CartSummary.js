import Styles from './CartSummary.module.css';
import CheckOut from '../order/CheckOut';
import {useState} from 'react';

const CartSummary = (props) => {

    const [showOrderForm, setShowOrderForm] = useState(false);
    
    console.log('Props: ', props);

    const closeHandler = (event) => {
        console.log('close cart from cart Summary');
        props.closeCart();
    }

    const total = props.cartItems.reduce((arr, cur) => arr + (cur.amount * cur.price),0);

    const checkOutToggle = (event) => {
        event.preventDefault();
        setShowOrderForm(prev => !prev);
    }

    return(
        <div className={Styles.container}>
            <div className={Styles.totalContainer}>
                <h2> Total Amount</h2>
                <h2 > £{total.toFixed(2)}</h2>
            </div>
            <div className={Styles.infoContainer}>
                {showOrderForm? <CheckOut toggleCheckOut={checkOutToggle} closeCart={props.closeCart} sendOrder={props.sendOrder}/> : ''}
                {showOrderForm?'':
                <div className={Styles.containerButtons}>
                    <button onClick={closeHandler}>Close</button>
                    {props.cartItems.length === 0? '':<button onClick={checkOutToggle}>Order</button>}
                </div>}
            </div>
        </div>

    )
}

export default CartSummary;