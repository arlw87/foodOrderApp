import Styles from './CartSummary.module.css';

const CartSummary = (props) => {
    
    console.log('Props: ', props);

    const closeHandler = (event) => {
        props.closeCart();
    }

    const total = props.cartItems.reduce((arr, cur) => arr + (cur.amount * cur.price),0);

    return(
        <div className={Styles.container}>
            <h2> Total Amount</h2>
            <div className={Styles.infoContainer}>
                <h2 > £{total}</h2>
                <div className={Styles.containerButtons}>
                    <button onClick={closeHandler}>Close</button>
                    <button>Order</button>
                </div>
            </div>
        </div>

    )
}

export default CartSummary;