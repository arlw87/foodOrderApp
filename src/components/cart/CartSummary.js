import Styles from './CartSummary.module.css';

const CartSummary = (props) => {
    
    console.log('Props: ', props);

    const closeHandler = (event) => {
        props.closeCart();
    }

    const orderHandler = (event) => {
        console.log('Ordering......');
    }

    const total = props.cartItems.reduce((arr, cur) => arr + (cur.amount * cur.price),0);

    return(
        <div className={Styles.container}>
            <h2> Total Amount</h2>
            <div className={Styles.infoContainer}>
                <h2 > £{total.toFixed(2)}</h2>
                <div className={Styles.containerButtons}>
                    <button onClick={closeHandler}>Close</button>
                    {total>0?<button onClick={orderHandler}>Order</button>:''}
                </div>
            </div>
        </div>

    )
}

export default CartSummary;