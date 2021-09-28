import Styles from './MealForm.module.css';
import { useState } from 'react';

const MealForm = (props) => {

    const [amount, updateAmount] = useState('1');

    const amountHandler = (event) => {
        updateAmount(event.target.value);
    }

    const submitHandler = (event) => {
        
        //need to handle negative numbers
        
        event.preventDefault();

        //convert amount to number
        const val = parseInt(amount);

        const obj = {
            meal: props.mealDetails,
            amount: val
        }
        props.addToCart(obj);
    }

    return(
        <form className={Styles.form} onSubmit={submitHandler}>
            <div>
                <label>Amount</label>
                <input type='number' value={amount} onChange={amountHandler}></input>
            </div>
            <button type='submit'>
                +Add
            </button>
        </form>

    )
}

export default MealForm;