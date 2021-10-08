import Styles from './CartButton.module.css';
import CartIcon from '../cart/CartIcon';
import { useEffect, useState } from 'react';

const CartButton = (props) => {
    
    const [cartHasChanged, setCartHasChanged] = useState(false);


    //use the Reduce array method to calculate the number of 
    //meals in today 

    const totalMeals = props.cart.reduce((acc, cur) => {
        console.log(acc);
        console.log(cur);
        return acc + cur.amount;
    }, 0)

    useEffect(() => {
        if (totalMeals === 0){
            return;
        }

        setCartHasChanged(true);
        const timer = setTimeout(()=>setCartHasChanged(false),400);

        return ()=> {
            clearTimeout(timer);
        }

       }, [totalMeals]);

   let classes = `${Styles.button} ${cartHasChanged? Styles.bump : ''}`;
    
    const clickHandler = (event) => {
        props.showCart();
    }

    console.log('Classes: ', classes);

    return(
        <button className={classes} onClick={clickHandler}>
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