import Styles from '../order/CheckOut.module.css';
import useInput from '../hooks/useInput';

const isNameValidate = (name) => {
    return name.trim().length > 0;
}

const CheckOut = (props) => {

    const {
        value: nameValue,
        handleInput: handleNameInput,
        handleTouched: handleNameBlur,
        reset: restName,
        isValid: isNameValid,
        isError: hasNameError
    } = useInput(isNameValidate);

    return(
        <form>
            <div className={hasNameError?Styles.errorInput:''}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value ={nameValue} onChange={handleNameInput} onBlur={handleNameBlur}></input>
                {hasNameError?<p>Please enter name</p>:''}
            </div>
            <div>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street'></input>
            </div>
            <div>
                <label htmlFor='postcode'>Post Code</label>
                <input type='text' id='postcode'></input>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' id='city'></input>
            </div>
        </form>
    )
}

export default CheckOut;