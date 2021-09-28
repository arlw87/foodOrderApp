import CartItemButtons from "./CartItemButtons";
import CartItemDetails from "./CartItemDetails";
import Styles from './CartItem.module.css';
import { Fragment } from "react/cjs/react.production.min";

const CartItem = (props) => {
    return(
        <Fragment>
            <li className={Styles.container}>
                <CartItemDetails mealDetails={props.meal}></CartItemDetails>
                <CartItemButtons></CartItemButtons>
            </li>
            <hr className={Styles.divider}></hr>
        </Fragment>

    )
}

export default CartItem;