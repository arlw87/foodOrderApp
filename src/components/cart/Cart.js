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
            amount: el.amount
        }
    });

    console.log(cartArray);

    return(
        <Modal hideModal={props.hideCart}>
            <ul className={Styles.container}>
                {cartArray.map((el)=> {
                    return <CartItem meal={el}/>
                })}
            </ul> 
            <CartSummary></CartSummary>   
        </Modal>
    )
}

export default Cart;