import CartItemButtons from "./CartItemButtons";
import CartItemDetails from "./CartItemDetails";
import Styles from './CartItem.module.css';
import { Fragment } from "react/cjs/react.production.min";

const CartItem = (props) => {

    const addMeal = () => {
        props.manageCart({key: props.meal.key,
                          value: 1})
    }

    const removeMeal = () => {
        props.manageCart({key: props.meal.key,
            value: -1})
    }


    return(
        <Fragment>
            <li className={Styles.container}>
                <CartItemDetails mealDetails={props.meal}></CartItemDetails>
                <CartItemButtons addMeal={addMeal} removeMeal={removeMeal}></CartItemButtons>
            </li>
            <hr className={Styles.divider}></hr>
        </Fragment>

    )
}

export default CartItem;