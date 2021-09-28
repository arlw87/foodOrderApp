import Modal from '../UI/Modal';
import Styles from '../cart/Cart.module.css';
import CartItem from '../cart/CartItem';
import CartSummary from './CartSummary';

const Cart = (props) => {

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

    console.log(cartArray);

    return(
        <Modal hideModal={props.hideCart}>
            <div className={Styles.container}>
                <ul className={Styles.listContainer}>
                    {cartArray.map((el)=> {
                        return <CartItem meal={el} manageCart={props.manageCart}/>
                    })}
                </ul> 
                <CartSummary closeCart={props.hideCart} cartItems={cartArray}></CartSummary> 
            </div>  
        </Modal>
    )
}

export default Cart;