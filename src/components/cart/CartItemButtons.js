import CartItemDetails from "./CartItemDetails";
import Style from "./CartItemButtons.module.css"

const CartItemButtons = (props) => {

    const removeMealHandler = (event) =>
    {
        props.removeMeal();
    }

    const addMealHandler = (event) => {
        props.addMeal();
    }

    return(
        <div className={Style.buttonContainer}> 
            <button onClick={removeMealHandler}>-</button>
            <button onClick={addMealHandler}>+</button>
        </div>
    )
}

export default CartItemButtons;