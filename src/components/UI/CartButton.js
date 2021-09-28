import Styles from './CartButton.module.css';
import CartIcon from '../cart/CartIcon';

const CartButton = () => {
    
    const numberOfItems = 5;
    
    return(
        <button className={Styles.button}>
            <span className={Styles.icon}>
                <CartIcon/>
            </span>
            <h4 className={Styles.title}>Your Cart</h4>
            <div className={Styles.badge}>
                {numberOfItems}
            </div>
        </button>
    )
}

export default CartButton;