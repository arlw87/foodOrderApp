import Styles from './CartItemDetails.module.css';

const CartItemDetails = (props) => {

    const { mealName, price, amount } = props.mealDetails;
    console.log(props.mealDetails);
    return(
        <div className={Styles.itemDetailsContainer}>
            <h3>{mealName}</h3>
            <div>
                <p>£{price}</p>
                <span>x {amount}</span>
            </div>
        </div>
    )
}

export default CartItemDetails;