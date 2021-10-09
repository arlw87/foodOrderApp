import Styles from './CartSummary.module.css';
import CheckOut from '../order/CheckOut';
import {useState} from 'react';

const CartSummary = (props) => {

    const [showOrderForm, setShowOrderForm] = useState(false);
    
    console.log('Props: ', props);

    const closeHandler = (event) => {
        props.closeCart();
    }

    const total = props.cartItems.reduce((arr, cur) => arr + (cur.amount * cur.price),0);

    const checkOutToggle = () => {
        setShowOrderForm(prev => !prev);
    }

    //if the checkout form is show cancelButton closes the checkout form
    //if not then the cancel button closes the cart
    const cancelButton = showOrderForm? <button onClick={checkOutToggle}>Cancel</button>:<button onClick={closeHandler}>Close</button>;

    const confirmButton = showOrderForm? <button>Confirm</button>: total>0?<button onClick={checkOutToggle}>Order</button>:'';

    return(
        <div className={Styles.container}>
            <div className={Styles.totalContainer}>
                <h2> Total Amount</h2>
                <h2 > £{total.toFixed(2)}</h2>
            </div>
            <div className={Styles.infoContainer}>
                {showOrderForm? <CheckOut/> : ''} 
                <div className={Styles.containerButtons}>
                    {cancelButton}
                    {confirmButton}
                </div>
            </div>
        </div>

    )
}

export default CartSummary;