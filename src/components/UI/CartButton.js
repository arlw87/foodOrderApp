import Styles from './CartButton.module.css';
import CartIcon from '../cart/CartIcon';

const CartButton = (props) => {
    
    //use the Reduce array method to calculate the number of 
    //meals in today


    console.log('Cart Button');
    const totalMeals = props.cart.reduce((acc, cur) => {
        console.log(acc);
        console.log(cur);
        return acc + cur.amount;
    }, 0)

   console.log(props);

    
    const clickHandler = (event) => {
        props.showCart();
    }


    return(
        <button className={Styles.button} onClick={clickHandler}>
            <span className={Styles.icon}>
                <CartIcon/>
            </span>
            <h4 className={Styles.title}>Your Cart</h4>
            <div className={Styles.badge}>
                {totalMeals}
            </div>
        </button>
    )
}

export default CartButton;