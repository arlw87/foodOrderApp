import Styles from './MealForm.module.css';
import { useState } from 'react';

const MealForm = (props) => {

    const [amount, updateAmount] = useState(1);

    const amountHandler = (event) => {
        updateAmount(event.target.value);
    }

    return(
        <form className={Styles.form}>
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