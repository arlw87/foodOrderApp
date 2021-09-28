import CartItemDetails from "./CartItemDetails";
import Style from "./CartItemButtons.module.css"

const CartItemButtons = (props) => {
    return(
        <div className={Style.buttonContainer}> 
            <button>-</button>
            <button>+</button>
        </div>
    )
}

export default CartItemButtons;